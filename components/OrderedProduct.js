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

const OrderedProduct = ({ id, title, image, rating, price, details, quantity }) => {

    let dispatch = useDispatch();

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(id))
        toast.success(`Item removed`)
    }

    return (
        <div className="flex items-center mb-16">
            <img src={image} alt="" className="object-contain w-[200px] h-[200px] mix-blend-multiply rounded-md mr-16" />
            <div className="flex flex-col text-left items-start -mt-[2rem] !max-w-[30rem] w-full">
                <p className="lg:text-[20px] lg:font-bold text-black font-semibold text-[4rem] text-left whitespace-nowrap w-[150px] overflow-ellipsis">{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>
                <p className="text-base font-semibold">Quantity x {quantity}</p>
                <strong>{formatter.format(price)}</strong>
                <div className="my-4 mx-auto">
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderedProduct