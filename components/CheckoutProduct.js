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

const CheckoutProduct = ({ id, title, image, rating, price, details, quantity }) => {

    let dispatch = useDispatch();

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(id))
        toast.success(`Item removed`)
    }

    return (
        <div className="flex flex-col md:flex-row items-center mb-20">
            <img src={image} alt="" className="object-contain w-[200px] h-[200px] mix-blend-multiply rounded-md lg:mr-16 md:mr=13 mr-7" />
            <div className="flex flex-col text-left items-start -mt-[2rem] !max-w-[30rem] w-full p-10 md:p-2 lg:pd-0">
                <p className=" text-2xl lg:text-[20px] lg:font-bold text-black font-semibold md:text-[4rem] text-left whitespace-nowrap w-[150px] overflow-ellipsis">{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>
                <p className="text-base font-semibold">Quantity x {quantity}</p>
                <strong>{formatter.format(price)}</strong>
                <div className="my-4 mx-auto">
                    <p>{details}</p>
                </div>
                <button className="authButton" onClick={removeItemFromBasket}>
                    <i className="mr-2 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg></i>
                    Remove from Cart
                </button>

            </div>
        </div>
    )
}

export default CheckoutProduct