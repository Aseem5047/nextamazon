import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/basketSlice';
import Gallery from './Gallery';

const CurrentProduct = ({ SingleProduct }) => {

    let dispatch = useDispatch();

    const AddItemToBasket = () => {
        toast.success("Item Added to Cart")
        const item = {
            key: SingleProduct.id,
            id: SingleProduct.id,
            rating: SingleProduct.rating,
            title: SingleProduct.title,
            price: SingleProduct.price,
            image: SingleProduct.image,
            specification: SingleProduct.specification,
            detail: SingleProduct.detail,
        };

        dispatch(addToBasket(item));
    }

    // number formatter
    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    var imageArr = SingleProduct.image && SingleProduct.image.map((image) => (
        image
    ))
    // console.log(SingleProduct);

    return (
        <div className="flex flex-col space-y-10 lg:flex-row items-center justify-between mt-3">
            {imageArr.length === 1 ? <img src={imageArr[0]} className="single-product-image" alt="" /> :
                <Gallery image={imageArr} title={SingleProduct.title} />
            }

            <div className="text-[black] mt-[1.75rem] md:h-[40rem] md:max-w-[50vw] w-full transition transform duration-500 ease-out px-[1rem] py-4 pt-0 mr-12 ml-4 m-auto flex flex-col justify-center">

                <p className="text-black text-2xl font-semibold text-center hover:scale-110">{SingleProduct.title}</p>

                <div className="flex justify-center text-[1rem]">
                    {Array(SingleProduct.rating).fill().map((_, index) => (<p key={index}>⭐</p>))}
                </div>

                <p className="text-center text-black text-lg mt-[5px]">
                    <strong>Price </strong>
                    <strong>{formatter.format(SingleProduct.price)}</strong>
                </p>

                <div className="my-4 px-4">
                    <h4 className="font-bold text-xl">Specification</h4>
                    {SingleProduct.specification && SingleProduct.specification.map((item, index) => (
                        <p key={index} className="text-base mt-2">{index + 1}. {item}</p>
                        // console.log("item")
                    ))}
                </div>

                <div className="my-4 mx-auto px-4">
                    <h4 className="font-bold text-xl mb-2">Product Description</h4>
                    <p>{SingleProduct.detail}</p>
                </div>

                <button className="btn" onClick={AddItemToBasket}>
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
        </div>
    )
}

export default CurrentProduct