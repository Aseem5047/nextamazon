import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/basketSlice';
import Gallery from './Gallery';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

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
                        <ShoppingCartOutlinedIcon />
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