import moment from 'moment/moment';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Footer } from '../components/Footer';
import HeaderItems from '../components/HeaderItems'
import Navbar from '../components/Navbar'
import Order from '../components/Order';
import { getUser } from '../features/authSlice';
import { db } from '../Firebase';

const Orders = () => {
    const user = useSelector(getUser);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user?.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapshot) => {
                setOrders(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            })
        }
    }, [user]);

    return (
        <div>
            <Head>
                <title>Orders</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <HeaderItems />
            <div className="relative top-[7rem] py-8 flex flex-col items-center justify-center">
                <p className="text-3xl font-semibold mb-10 ">Your <span className="text-[#fcb703] font-bold">Orders</span></p>
                <div className="flex flex-col items-center space-y-4">
                    {orders && orders.map((order, index) => <Order order={order} key={index} />
                    )}
                </div>
                <Link href='/' className="authButton w-[15rem] text-xl font-semibold mt-20">Go To Home <span className="ml-2 my-auto"><AiOutlineHome /></span></Link>
                <Footer />
            </div>

        </div>
    )
}

export default Orders