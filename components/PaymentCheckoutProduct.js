import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { toast } from 'react-hot-toast';
import { removeFromBasket } from '../features/basketSlice';
import { useDispatch } from 'react-redux';

// number formatter.
var formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
});

const PaymentCheckoutProduct = ({ id, title, image, rating, price, quantity }) => {

    let dispatch = useDispatch();

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(id))
        toast.success(`Item removed`)
    }

    return (

        <div className="min-w-[20rem] h-[20rem]">
            <img src={image} alt="" className="object-contain w-[200px] h-[200px] mix-blend-multiply rounded-md mr-8" />
            <div className="">
                <p className="text-lg font-bold">{title}</p>
                <p className="text-black text-lg font-semibold">Quantity x {quantity}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>
                <strong>{formatter.format(price)}</strong>
                <button className="authButton" onClick={removeItemFromBasket}>
                    <i className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg></i>
                    Remove from Cart
                </button>

            </div>
        </div>
    )
}

export default PaymentCheckoutProduct