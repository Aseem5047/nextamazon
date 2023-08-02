import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51JovZySDBS9sTKNkPxVUAeBqLYkorrXjsoM6htb7HEGAjHQ97wYUjAHwi481BqRltfEfboRphjkmzmlurPdQys2400KEjJ2pJ6");

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log(req.body);
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_address_collection: {
                    allowed_countries: ['IN'],
                },
                shipping_options: [
                    { shipping_rate: 'shr_1L0OzcSDBS9sTKNkp8fJsguc' },
                    { shipping_rate: 'shr_1L0P16SDBS9sTKNkNdraQIII' },
                ],
                line_items: req.body.map((item) => {
                    const img = item.image[0];
                    const newImage = img.replace(item.image[1]);

                    return {
                        price_data: {
                            currency: 'inr',
                            product_data: {
                                name: item.title,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: 1
                    }
                }),

                success_url: `http://localhost:3000/success`,
                cancel_url: `http://localhost:3000/`,
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);

            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}