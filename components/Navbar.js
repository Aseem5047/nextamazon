/* eslint-disable no-undef */

import Image from 'next/image'
import React, { useState } from 'react'
import AmazonLogo from '../assets/Amazon_Logo.png'
import SearchIcon from '@material-ui/icons/Search'
import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Autocomplete, TextField, Tooltip } from '@mui/material'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logoutInitiate, setUser } from '../features/authSlice'
import Dropdown from './DropDown'
import { toast } from 'react-hot-toast';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'
import { selectBasketItems } from '../features/basketSlice'
import ReactTooltip from 'react-tooltip';


const options = [
    'home',
    'trending',
    'mobiles',
    'electronics',
    'fashion',
    'newReleases',
    'computers',
    'sports&fitness',
    'prime',
    'home&kitchen',
];

const Navbar = () => {

    const [inputValue, setInputValue] = useState('')
    const [toggleMenu, setToggleMenu] = useState(false)
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [pin, setPin] = useState('')
    const [selectAddress, setSelectAddress] = useState(false)

    const [value, setValue] = useState("home");

    const user = useSelector(state => state.auth.user);
    const basket = useSelector(selectBasketItems);

    let dispatch = useDispatch();
    const history = useRouter();

    const handleAuth = () => {

        if (user) {

            dispatch(logoutInitiate());
            toast.success("Successfully logged out")
        }
        else {
            history.push('/authenticate')
        }
    }


    const onSubmit = (e) => {
        options.includes(inputValue) ? history.push(`/${inputValue}`) : history.push('/NotFound');
        e.preventDefault();
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            options.includes(inputValue) ? history.push(`/${inputValue}`) : history.push('/NotFound');
            event.preventDefault();
        }
    }

    console.log(address);

    return (
        <div className="flex items-center z-50 h-[65px] justify-between md:justify-between fixed w-[100vw] top-0 bg-[#131921]">

            {/* left */}
            <div className="flex items-center">
                <Link data-tip="Home" href="/" className="relative ">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="Logo"

                        className="mt-[10px] object-contain ml-6 mr-4 w-[80px] md:w-[100px]"
                    />
                </Link>
                <ReactTooltip place="bottom" type="dark" effect="solid" />

                <div className="flex mb-1">
                    <div className="flex justify-center items-center">
                        <MapPinIcon className=" hidden lg:inline-flex h-6 w-6 text-white cursor-pointer" onClick={() => setSelectAddress(!selectAddress)} />
                        {!address && <p className="hidden lg:block text-md text-white ml-1 font-semibold hover:text-[#f36100] cursor-pointer" onClick={() => setSelectAddress(!selectAddress)}>Your Address</p>}
                        {
                            selectAddress && <div className="w-full h-[100vh] addressModal absolute z-40 top-[0vh] left-[0vw]">
                                <form className="shadow-xl bg-white w-[35rem] m-auto my-[10vh] rounded-[5px] flex flex-col p-[20px] h-fit" autoComplete="off">
                                    <div className="flex items-center justify-between mb-7">
                                        <p className="text-2xl font-semibold">Add New Address</p>
                                        <AiOutlineClose color="black" className="hover:bg-[#fcba03] rounded-full p-1 cursor-pointer" size={27} onClick={() => setSelectAddress(false)} />
                                    </div>

                                    <h4 className="text-sm ml-1 mb-2 font-semibold">Address</h4>
                                    <input value={address} onChange={(e) => setAddress(e.target.value)} className="authInput border border-gray-300 rounded-md" type="text" placeholder="Enter Address" autoComplete="off" />

                                    <h4 className="text-sm ml-1 mb-2 font-semibold">Full Name</h4>
                                    <input value={name} onChange={(e) => setName(e.target.value)} className="authInput border border-gray-300 rounded-md" type="text" placeholder="Enter Full Name" autoComplete="off" />

                                    <h4 className="text-sm ml-1 mb-2 font-semibold">City</h4>
                                    <input value={city} onChange={(e) => setCity(e.target.value)} className="authInput border border-gray-300 rounded-md" type="text" placeholder="Enter City" autoComplete="off" />

                                    <h4 className="text-sm ml-1 mb-2 font-semibold">Pin</h4>
                                    <input value={pin} onChange={(e) => setPin(e.target.value)} className="authInput border border-gray-300 rounded-md" type="text" placeholder="Enter Pin" autoComplete="off" />

                                    <div className="flex items-center space-x-4">
                                        <p className="text-[13px] mt-2 ">Correct Address Provided ?</p>
                                        <button className="authButton md:w-[10rem]" type="submit" onClick={() => setSelectAddress(!selectAddress)}>Save Changes</button>
                                    </div>
                                    <p className="text-sm mt-2">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                                    <p className="text-xs text-gray-500">
                                        However, shipments can sometimes arrive early or later than planned.
                                        <br />
                                        Preferences are used to plan your delivery.
                                    </p>
                                </form>
                            </div>
                        }
                        {address && <div className="max-w-[10rem] overflow-ellipsis flex flex-col flex-nowrap">
                            <p className="hidden h-[1rem] lg:block text-xs text-gray-400 ml-1 font-semibold hover:text-[#f36100] capitalize overflow-ellipsis overflow-hidden flex-nowrap" onClick={() => setSelectAddress(!selectAddress)}>Deliever to {name}</p>
                            <p className="hidden lg:block text-sm text-white ml-1 font-semibold hover:text-[#f36100] overflow-ellipsis overflow-hidden flex-nowrap">{city} {pin}</p>
                        </div>}
                    </div>
                </div>
            </div>

            {/* middle */}

            <div className=" flex items-center justify-center">

                <div className="flex items-center space-x-2">
                    <Dropdown />

                    <Autocomplete
                        className="autoComplete"
                        // disablePortal
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="header-search"
                        options={options}
                        renderInput={(params) => <TextField {...params} label="Search" />}
                        onKeyDown={handleKeyDown}
                    />

                    <button className="hidden md:inline-flex authButton my-auto w-16 ml-2 h-full" type="submit" onClick={onSubmit} onKeyDown={handleKeyDown}><SearchIcon className="text-yellow m-auto font-extrabold" /></button>

                </div>

            </div>

            {/* right */}

            <div className=" hidden lg:flex items-center text-white mr-4 mb-[10px]">

                <div data-tip={`${user ? "User Sign Out" : "User Log In"}`} onClick={handleAuth} className="text-white flex items-center mt-[10px] cursor-pointer">
                    {user?.photoURL ? <Image src={user.photoURL} width={100}
                        height={100} alt="" className="user_image" /> : <Image src="/defaultProfile.png" alt=""
                            width={100} height={100}
                            className="user_image" />}
                </div>
                <ReactTooltip place="bottom" type="dark" effect="solid" />

                <Link data-tip="Account" href={`${user ? "/account" : "/"}`} className="text-white mt-2">
                    <div className="header-option userInfo">
                        <div className="flex flex-col items-center">
                            <span className="header-option1">Hello, {user ? user?.displayName?.toUpperCase() || user.email : "Guest"}</span>
                            <span className="header-option2">Account & Lists</span>
                        </div>
                    </div>
                </Link>
                <ReactTooltip place="bottom" type="dark" effect="solid" />

                <Link data-tip="Orders" href="/orders" className="header-link">
                    <div className="header-option">
                        <span className="header-option1">Returns</span>
                        <span className="header-option2">& Orders</span>
                    </div>
                </Link>
                <ReactTooltip place="bottom" type="dark" effect="solid" />

                <Link data-tip="Prime" href="/prime" className="header-link" id="HeaderPrime">
                    <div className="header-option">
                        <span className="header-option1">Your</span>
                        <span className="header-option2">Prime</span>
                    </div>
                </Link>
                <ReactTooltip place="bottom" type="dark" effect="solid" />

                <Link data-tip="Cart" href="/checkout" className="header-link">
                    <div className="flex text-white !mt-1">
                        <div src="" className="cart__image" id="Cart" ></div>
                        <div className="cart__item "> {basket && basket.length} </div>
                    </div>
                </Link>
                <ReactTooltip place="bottom" type="dark" effect="solid" />

            </div>

            {/* Navbar in mobile view */}

            <div className=" relative flex lg:hidden items-center mr-2">

                <Link href="/checkout" className="header-link">
                    <div className="flex text-white !-mt-3">
                        <div src="" className="cart__image" id="Cart" ></div>
                        <div className="cart__item"> {basket && basket.length} </div>
                    </div>
                </Link>

                {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} className="cursor-pointer" /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} className="cursor-pointer" />}

                {
                    toggleMenu && (
                        <div className="flex flex-col items-end p-4 bg-[#131921] absolute top-[3.2rem] right-[0.5rem] w-52 rounded-lg z-20">

                            <div data-tip={`${user ? "User Sign Out" : "User Log In"}`} onClick={handleAuth} className="text-white flex items-center mt-[10px] cursor-pointer">
                                {user?.photoURL ? <Image src={user.photoURL} width={100}
                                    height={100} alt="" className="user_image" /> : <Image src="/defaultProfile.png" alt=""
                                        width={100} height={100}
                                        className="user_image" />}
                            </div>
                            <ReactTooltip place="bottom" type="dark" effect="solid" />

                            <Link href={`${user ? "/account" : "/"}`} className="text-white mt-2">
                                <div className="header-option userInfo">
                                    <div className="flex flex-col items-end">
                                        <span className="header-option1">Hello, {user ? user?.displayName?.toUpperCase() || user.email : "Guest"}</span>
                                        <span className="header-option2">Account & Lists</span>
                                    </div>
                                </div>
                            </Link>

                            <Link data-tip="Orders" href="/orders" className="header-link">
                                <div className="header-option items-end">
                                    <span className="header-option1">Returns</span>
                                    <span className="header-option2">& Orders</span>
                                </div>
                            </Link>
                            <ReactTooltip place="bottom" type="dark" effect="solid" />


                            <Link data-tip="Prime" href="/prime" className="header-link" id="HeaderPrime">
                                <div className="header-option items-end">
                                    <span className="header-option1">Your</span>
                                    <span className="header-option2">Prime</span>
                                </div>
                            </Link>
                            <ReactTooltip place="bottom" type="dark" effect="solid" />


                            <Link data-tip="Cart" href="/checkout" className="header-link">
                                <div className="navbar_text navbar__cart ">
                                    <div src="" className="cart__image" id="Cart" ></div>
                                    <div className="cart__item_mobileMenu"> {basket && basket.length} </div>
                                </div>
                            </Link>
                            <ReactTooltip place="bottom" type="dark" effect="solid" />

                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default Navbar