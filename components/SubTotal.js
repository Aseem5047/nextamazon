import { useRouter } from 'next/router';
import React from 'react';
import CurrencyFormat from "react-currency-format";
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getUser } from '../features/authSlice';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

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
            >{basket.length > 0 ? (<div className="flex items-center justify-center"><ShoppingCartOutlinedIcon /><span className="font-semibold ml-2">Proceed to Checkout</span></div>) : "Shopping Cart Empty"}</button>

        </div >
    )
}

export default SubTotal
