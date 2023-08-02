import React, { useMemo, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import toast from "react-hot-toast";
import Review from "./Review";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";
import PaymentCheckoutProduct from './PaymentCheckoutProduct';

const Checkout = () => {
    const basket = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    let stripePromise;

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe("pk_test_51JovZySDBS9sTKNkxz3QCHZuKBEX0rgxy6T311FMKxhPjCFkgM5C5Gm7lQCMmy4rHZjgYDHcqS1llEZCJUBWCGc800W8a0799r");
        }

        return stripePromise;
    };


    const handleCheckout = async () => {

        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(basket),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();
        // console.log(data);

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({ sessionId: data.id });
    }

    useMemo(() => {
        const groupedItems = basket.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            // console.log(results);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems)
    }, [basket])

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center text-center">
                <p className="text-2xl font-bold">Review Order List</p>
                <p className="text-lg font-semibold">Tap <strong className="text-[#fcb703]">Checkout</strong> button below to Proceed</p>
            </div>
            <div className="flex overflow-y-hidden overflow-x-scroll w-[85vw] pt-[3rem] pb-[5rem] justify-start space-x-20 scroll-smooth paymentProductScroll items-center">
                {Object.entries(groupedItemsInBasket).map(([key, items]) => (

                    < PaymentCheckoutProduct
                        key={key}
                        id={items[0].id}
                        title={items[0].title}
                        image={items[0].image}
                        price={items[0].price}
                        rating={items[0].rating}
                        details={items[0].detail}
                        quantity={items.length}
                    />

                ))}
            </div>
            <button onClick={handleCheckout} className="btn w-[20rem] flex items-center justify-center mt-16" > <ShoppingCartOutlinedIcon /> Checkout</button>
        </div>
    );
};

export default Checkout;
