import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { toast } from 'react-hot-toast';
import { removeFromBasket } from '../features/basketSlice';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
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
                    <i className="mr-2"><ShoppingCartOutlinedIcon /></i>
                    Remove from Cart
                </button>

            </div>
        </div>
    )
}

export default PaymentCheckoutProduct