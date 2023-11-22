import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from './Fireworks';
import Stripe from 'stripe';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../Firebase';
import { selectBasketItems, setBasketEmpty, selectBasketTotal } from '../features/basketSlice';
import { getUser } from '../features/authSlice';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from "nookies";


const OrderSuccess = () => {

  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState(true);

  const basket = useSelector(selectBasketItems);
  const user = useSelector(getUser);
  const basketTotal = useSelector(selectBasketTotal)
  const history = useRouter();

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;

  useEffect(() => {
    localStorage.clear();
    runFireworks();
    // dispatch(setBasketEmpty())
  }, []);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await fetch(`/api/secret/${basketTotal}`, {
        method: 'POST'
      }).then((response) => response.json()).then((data) => {
        setClientSecret(data.clientSecret);
      })
    }
    getClientSecret();
  }, [basket])

  const handleClick = (e) => {
    e.preventDefault();
    try {
      // console.log(clientSecret.id);
      // console.log(clientSecret.amount);
      // console.log(clientSecret.created);
      // console.log(user.uid);
      // console.log(basket);
      db.collection("users").doc(user && user.uid).collection("orders").doc(clientSecret.id).set({
        basket: basket,
        amount: clientSecret.amount,
        created: clientSecret.created,
      })
      dispatch(setBasketEmpty())
      toast.success("Payment successful")
      history.push("/orders");

    } catch (error) {
      console.log(error)
      dispatch(setBasketEmpty())
      toast.error("Payment failed")
      history.push("/");
    }
  }

  // console.log(basket);
  // console.log(basketTotal);

  return (
    <div className="bg-white min-h-[60vh]">
      <div className="w-[1000px] m-auto mt-[160px] bg-[#dcdcdc] p-[50px] rounded-lg flex justify-center items-center flex-col">
        <p className="text-green-500 text-5xl">
          <BsBagCheckFill />
        </p>
        <h2 className="capitalize mt-[15px] font-black text-[40px]">Thank you for your order!</h2>
        <p className="text-[16px] font-bold text-center">Check your email inbox for the receipt.</p>
        <p className="text-[16px] font-bold text-center m-[10px] mt-[30px]">
          If you have any questions, please email
          <a className="email ml-[5px] text-[#f02d34]" href="mailto:aseemgupta2002@gmail.com">
            order@example.com
          </a>
        </p>
        <Link href="/orders">
          <button type="submit" onClick={handleClick} width="300px" className="w-full max-w-[400px] px-[12px] py-[10px] rounded-lg text-[20px] mt-[40px] uppercase bg-[#f02d34] text-white cursor-pointer hover:scale(1.1, 1.1) transition transform ease-out">
            Review Order
          </button>
        </Link>
      </div>
    </div>
  )
}

export default OrderSuccess
