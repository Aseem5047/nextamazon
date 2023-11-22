import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/basketSlice';


const Product = ({ id, title, image, price, rating, specification, detail, type }) => {

    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch();

    const onAddItemToBasket = () => {
        toast.success("Item Added to Cart")
        const item = {
            id, title, image, price, rating, specification, detail
        };
        dispatch(addToBasket(item));
    };

    // number formatter
    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return (
        <div className="relative text-[black] mt-[1.75rem] max-h-[25rem] max-w-[20rem] w-full transition transform duration-500 ease-out hover:scale-110 hover:shadow-lg p-[1rem]">

            {toggle && (
                <div className="absolute bottom-0 bg-[#000000db] z-10 rounded-t-lg  mx-auto left-0 pt-2 pb-1 px-4 max-h-auto clamped-text w-full text-white ">
                    <span className="text-white">{specification}</span>
                </div>
            )}


            <Link href={`/singleProduct/${type}/${id}`}>

                <p className="text-black text-lg font-semibold text-center hover:scale-110" onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)}>{title}</p>

                <p className="text-center text-black text-md mt-[5px]">
                    <strong>Price </strong>
                    <strong>{formatter.format(price)}</strong>
                </p>
                <div className="flex justify-center text-[0.8rem]">
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>

                <img src={image} alt="" id="productImg" />

            </Link>

            <button className="btn" onClick={onAddItemToBasket}>
                <i className="align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </i>
                <p className="ml-1 font-semibold">
                    Add to Cart
                </p>
            </button>

        </div>
    )
}

export default Product