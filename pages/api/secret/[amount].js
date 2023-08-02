import { useSelector } from 'react-redux';
import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51JovZySDBS9sTKNkPxVUAeBqLYkorrXjsoM6htb7HEGAjHQ97wYUjAHwi481BqRltfEfboRphjkmzmlurPdQys2400KEjJ2pJ6");
export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { amount } = req.query;
        console.log(amount);
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: "inr",
            });

            res.status(200).json({
                clientSecret: paymentIntent,
            });
            console.log(paymentIntent);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}