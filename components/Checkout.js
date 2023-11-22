import React, { useMemo, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
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
            <button onClick={handleCheckout} className="btn w-[20rem] flex items-center justify-center mt-16 font-semibold gap-2" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
                Checkout</button>
        </div>
    );
};

export default Checkout;
