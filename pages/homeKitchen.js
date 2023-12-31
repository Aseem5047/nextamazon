import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer';
import HeaderItems from '../components/HeaderItems';
import ItemSets from '../components/ItemSets';
import Navbar from '../components/Navbar';
import { db } from '../Firebase';
import { HAd1, HAd2, HAd } from '../BannerImages'
import Ads from '../components/Ads';

const HomeKitchen = () => {


    const [productData, setProductData] = useState([])
    const Images = [HAd1, HAd2, HAd]

    useEffect(() => {
        db.collection("HomeKitchenData").onSnapshot((snapshot) => {
            // eslint-disable-next-line array-callback-return
            snapshot.docs.map((doc) => {
                var data = doc.data()
                setProductData(product => [...product, data])

            });
        });
    }, []);

    return (
        <div>
            <Head>
                <title>Home and Kitchen</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <HeaderItems />
            <Ads images={Images} />
            <div className="relative top-[18rem] md:top-[28rem] py-8">
                <ItemSets productData={productData} />
                <Footer />
            </div>

        </div>
    )
}

export default HomeKitchen