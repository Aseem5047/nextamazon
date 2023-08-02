import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/basketSlice';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'


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

            {toggle && <div className="absolute bottom-0 bg-[#000000db] z-10 rounded-lg shadow-md mx-auto left-0 py-2 px-4 max-h-[10rem] overflow-hidden text-center  w-full text-white">
                <span className="text-white">{specification}</span>
            </div>}

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
                    <ShoppingCartOutlinedIcon />
                </i>
                <p className="ml-1 font-semibold">
                    Add to Cart
                </p>
            </button>

        </div>
    )
}

export default Product