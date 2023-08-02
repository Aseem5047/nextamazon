import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer';
import HeaderItems from '../components/HeaderItems';
import ItemSets from '../components/ItemSets';
import Navbar from '../components/Navbar';
import { db } from '../Firebase';
import { NAd, NAd1, NAd2, NAd3 } from '../BannerImages'
import Ads from '../components/Ads';

const NewReleases = () => {
    const [productData, setProductData] = useState([])
    const Images = [NAd, NAd1, NAd2, NAd3]

    useEffect(() => {
        db.collection("NewReleasesData").onSnapshot((snapshot) => {
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
                <title>New Arrivals</title>
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

export default NewReleases