import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="flex-col md:flex justify-center p-[20px] mt-[40px] ">
                <div className="flex flex-col md:flex-row m-auto justify-center">
                    <div className="flex flex-col md:flex p-[30px] text-center md:text-start">
                        <h1 className="mb-[20px] text-[1.5rem]">Get To Know Us</h1>
                        <Link className="text-black mb-[10px] hover:underline" href="/">About Us</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Careers</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Press Releases</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Amazon Cares</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Gift a Smile</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Amazon Science</Link>
                    </div>
                    <div className="flex flex-col p-[30px] text-center md:text-start">
                        <h1 className="mb-[20px] text-[1.5rem]">Connect with Us</h1>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Facebook</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Twitter</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Instagram</Link>
                    </div>
                    <div className="flex flex-col p-[30px] text-center md:text-start">
                        <h1 className="mb-[20px] text-[1.5rem]">Make Money With Us</h1>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Sell on Amazon</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Sell under Amazon Accelerator</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Amazon Global Selling</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Become an Affilate</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Fulfilment by Amazon</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Advertise your Product</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Amazon Pay on Merchants</Link>
                    </div>
                    <div className="flex flex-col p-[30px] text-center md:text-start">
                        <h1 className="mb-[20px] text-[1.5rem]">Let Us Help You</h1>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Covid-19 and Amazon</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Your Account</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Return Centre</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">100% Purchase Protection</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Amazon App Download</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Amazon Assistant Download</Link>
                        <Link className="text-black mb-[10px] hover:underline" href="/">Help</Link>
                    </div>
                </div>
            </div>
            <div className="text-center ">

                <Image width={50} height={50} src="/favicon.ico" alt="" style={{ width: "50px", height: "10%", marginTop: "-10px", marginBottom: "-50px", marginLeft: "auto", margin: "auto" }} />
                <p className="font-bold text-black rounded  my-2 mx-2">
                    © 2021 Amazon Inc. All Rights Reserved.
                </p>
            </div>
        </>

    )
}
