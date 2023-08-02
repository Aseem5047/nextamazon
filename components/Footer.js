import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="flex-col md:flex justify-center p-[20px] mt-[40px] ">
                <div className="flex flex-col md:flex-row m-auto justify-center">
                    <div className="flex flex-col md:flex p-[30px] text-center md:text-start">
                        <h1 className="mb-[20px] text-[1.5rem]">Get To Know Us</h1>
                        <a className="text-black mb-[10px] hover:underline" href="/">About Us</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Careers</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Press Releases</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Amazon Cares</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Gift a Smile</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Amazon Science</a>
                    </div>
                    <div className="flex flex-col p-[30px] text-center md:text-start">
                        <h1 className="mb-[20px] text-[1.5rem]">Connect with Us</h1>
                        <a className="text-black mb-[10px] hover:underline" href="/">Facebook</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Twitter</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Instagram</a>
                    </div>
                    <div className="flex flex-col p-[30px] text-center md:text-start">
                        <h1 className="mb-[20px] text-[1.5rem]">Make Money With Us</h1>
                        <a className="text-black mb-[10px] hover:underline" href="/">Sell on Amazon</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Sell under Amazon Accelerator</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Amazon Global Selling</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Become an Affilate</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Fulfilment by Amazon</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Advertise your Product</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Amazon Pay on Merchants</a>
                    </div>
                    <div className="flex flex-col p-[30px] text-center md:text-start">
                        <h1 className="mb-[20px] text-[1.5rem]">Let Us Help You</h1>
                        <a className="text-black mb-[10px] hover:underline" href="/">Covid-19 and Amazon</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Your Account</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Return Centre</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">100% Purchase Protection</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Amazon App Download</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Amazon Assistant Download</a>
                        <a className="text-black mb-[10px] hover:underline" href="/">Help</a>
                    </div>
                </div>
            </div>
            <div className="text-center ">

                <img src="favicon.ico" alt="" style={{ width: "50px", height: "10%", marginTop: "-10px", marginBottom: "-50px", marginLeft: "auto", margin: "auto" }} />
                <p className="font-bold text-white rounded dark:text-white my-2 mx-2">
                    © 2021 Amazon Inc. All Rights Reserved.
                </p>
            </div>
        </>

    )
}
