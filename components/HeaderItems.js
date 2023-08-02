import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { BiChevronDown } from 'react-icons/bi'


const HeaderItems = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [exploreMenu, setExploreMenu] = useState(false);
    const [trendingMenu, setTrendingMenu] = useState(false);
    const [devicesMenu, setDevicesMenu] = useState(false);
    const [categoriesMenu, setCategoriesMenu] = useState(false);

    const resetAll = () => {
        setToggleMenu(false);
        setExploreMenu(false);
        setTrendingMenu(false);
        setDevicesMenu(false);
        setCategoriesMenu(false);
    }

    console.log(exploreMenu);
    return (
        <div className="item-container" id="item-container">

            {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => resetAll()} className="cursor-pointer mx-2 hover:opacity-80 min-w-[2rem] min-h-[2rem]" /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} className="cursor-pointer mx-2 hover:opacity-80 min-w-[2rem] min-h-[2rem]" />}

            {toggleMenu && (<div className=" categories flex flex-col max-h-[80vh] lg:flex-row items-start p-4 bg-[#131921] fixed top-[6.7rem] left-[0.5rem] w-52 lg:w-[60rem] lg:h-fit rounded-lg z-50 overflow-y-scroll">

                <div className="flex flex-col items-center w-full cursor-pointer" onClick={() => setExploreMenu(!exploreMenu)}>
                    <div className="flex items-center justify-between lg:justify-around w-full lg:w-10/12 bg-[#3936369f] p-2">
                        <span className="hover:opacity-80">Explore</span> <BiChevronDown color="#fff" size={27} className="cursor-pointer mx-2 hover:opacity-80" />
                    </div>
                    {exploreMenu && (<div className="bg-[#3936369f] w-full
                    lg:w-[12rem] flex flex-col p-5 my-4 px-10 rounded-lg space-y-2">
                        <Link className="hover:opacity-80" href="/checkout">Cart</Link>
                        <Link className="hover:opacity-80" href="/orders">Orders</Link>
                        <Link className="hover:opacity-80" href="/prime">Prime</Link>
                        <Link className="hover:opacity-80" href="/">Address</Link>
                    </div>)}
                </div>
                <div className="flex flex-col items-center w-full cursor-pointer" onClick={() => setTrendingMenu(!trendingMenu)}>
                    <div className="flex items-cener justify-between lg:justify-around w-full lg:w-10/12 bg-[#3936369f] p-2">
                        <span className="hover:opacity-80">Trending</span> <BiChevronDown color="#fff" size={27} className="cursor-pointer mx-2 hover:opacity-80" />
                    </div>
                    {trendingMenu && (<div className="bg-[#3936369f] w-full
                    lg:w-[12rem] flex flex-col p-5 my-4 px-10 rounded-lg space-y-2">
                        <Link className="hover:opacity-80" href="/trending">Best Sellers</Link>
                        <Link className="hover:opacity-80" href="/newReleases">New Releases</Link>
                    </div>)}
                </div>
                <div className="flex flex-col items-center w-full cursor-pointer" onClick={() => setDevicesMenu(!devicesMenu)}>
                    <div className="flex items-center justify-between lg:justify-around w-full lg:w-10/12 bg-[#3936369f] p-2">
                        <span className="hover:opacity-80">Digital Devices</span> <BiChevronDown color="#fff" size={27} className="cursor-pointer mx-2 hover:opacity-80" />
                    </div>
                    {devicesMenu && (<div className="bg-[#3936369f] w-full
                    lg:w-[12rem] flex flex-col p-5 my-4 px-10 rounded-lg space-y-2">
                        <Link className="hover:opacity-80" href="/echoAlexa">Echo & Alexa</Link>
                        <Link className="hover:opacity-80" href="/echoAlexa">Fire Tv</Link>
                        <Link className="hover:opacity-80" href="/prime">Prime Video</Link>
                        <Link className="hover:opacity-80" href="/prime">Prime Music</Link>
                    </div>)}
                </div>
                <div className="flex flex-col items-center w-full cursor-pointer" onClick={() => setCategoriesMenu(!categoriesMenu)} >
                    <div className="flex items-center justify-between lg:justify-around w-full lg:w-10/12 bg-[#3936369f] p-2">
                        <span className="hover:opacity-80">Categories</span> <BiChevronDown color="#fff" size={27} className="cursor-pointer mx-2 hover:opacity-80" />
                    </div>
                    {categoriesMenu && (<div className="bg-[#3936369f] w-full
                    lg:w-[12rem] flex flex-col p-5 my-4 px-10 rounded-lg space-y-2">
                        <Link className="hover:opacity-80" href="/mobiles">Mobiles</Link>
                        <Link className="hover:opacity-80" href="/computers">Computers</Link>
                        <Link className="hover:opacity-80" href="/electronics">Electronics</Link>
                        <Link className="hover:opacity-80" href="/fashion">Fashion</Link>
                        <Link className="hover:opacity-80" href="/homeKitchen">Kitchen</Link>
                        <Link className="hover:opacity-80" href="/sportsFiteness">Sports</Link>
                        <Link className="hover:opacity-80" href="/prime">Entertainment</Link>
                    </div>)}
                </div>
            </div>)}

            <p><span>
                {<Link href="/trending">Best Sellers</Link>}
            </span></p>
            <p><span>
                {<Link href="/mobiles">Mobiles</Link>}
            </span></p>
            <p><span>
                {<Link href="/electronics">Electronics</Link>}
            </span></p>
            <p id="fashion"><span>
                {<Link href="/fashion">Fashion</Link>}
            </span></p>
            <p id="arrival"><span>
                {<Link href="/newReleases">New Arrivals</Link>}
            </span></p>
            <p id="alexa"><span>
                {<Link href="/echoAlexa">Digital Devices</Link>}
            </span></p>
            <p id="computers"><span>
                {<Link href="/computers">Computers</Link>}
            </span></p>
            <p id="prime"><span>
                {<Link href="/sportsFitness">Sports & Fitness</Link>}
            </span></p>
            <p id="kitchen"><span>
                {<Link href="/homeKitchen">Home & Kitchen</Link>}
            </span></p>
            <p><span>
                {<Link id="prime" href="/prime">Movie & Music</Link>}
            </span></p>
            <p><span>
                {<Link id="prime" href="/pay">Amazon Pay</Link>}
            </span></p>
        </div>
    )
}

export default HeaderItems
