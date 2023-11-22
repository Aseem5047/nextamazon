import { useRouter } from 'next/router';
import React from 'react';
import CurrencyFormat from "react-currency-format";
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getUser } from '../features/authSlice';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';

const SubTotal = () => {

    const user = useSelector(getUser);
    const basket = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)

    // console.log(user);

    let history = useRouter();
    const handleCheckout = () => {
        if (user) {
            history.push("/payment");
            toast.success("Redirected to Payment Page")

        } else {
            history.push("/authenticate");
            toast.error("Please Login to Continue")
        }
    };
    // console.log(basketTotal);
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        {/* {console.log(value)} */}
                        <p>
                            SubTotal ({basket.length} items) : <strong>{!basket.length > 0 ? "₹ 0" : (value)}</strong>
                        </p>
                        <span className="flex items-center">
                            <input type="checkbox" className="mr-[5px]" />
                            This order contains a gift
                        </span>
                    </>
                )}
                decimalScale={2}
                value={basketTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹ "}
            />

            <button className="hover:scale-105" disabled={!basket.length > 0} onClick={handleCheckout}
                style={{ background: `${!basket.length > 0 && "#80808021"}` }}
            >{basket.length > 0 ? (<div className="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg><span className="font-semibold ml-2">Proceed to Checkout</span></div>) : "Shopping Cart Empty"}</button>

        </div >
    )
}

export default SubTotal
