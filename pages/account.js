import Link from 'next/link'
import React from 'react'
import { AccountinfoText } from '../constants/AccountinfoText'
import Navbar from '../components/Navbar'
import HeaderItems from '../components/HeaderItems'
import { useSelector, useDispatch } from 'react-redux'
import ReactTooltip from 'react-tooltip';
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import Image from 'next/image'


const Account = () => {
    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch()
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

    return (
        <>
            <Navbar />
            <HeaderItems />
            <div className="mt-[10rem] flex flex-col justify-start" style={{ marginBottom: "4rem" }}>
                <div className="flex flex-col m-auto max-w-[65rem] gap-4">
                    <span className="text-2xl font-semibold">Your Account</span>


                    <div className=" flex items-center text-black mr-4 mb-[10px]">

                        <div data-tip={`${user ? "User Sign Out" : "User Log In"}`} onClick={handleAuth} className=" flex items-center mt-[10px] cursor-pointer">
                            {user?.photoURL ? <Image src={user.photoURL} width={100} height={100} alt="" className="user_image w-[5rem] h-[5rem]" /> : <Image src="/defaultProfile.png" alt=""
                                width={100} height={100}
                                className="user_image w-[5rem] h-[5rem]" />}
                        </div>
                        <ReactTooltip place="bottom" type="dark" effect="solid" />

                        <Link data-tip="Account" href={`${user ? "/account" : "/"}`} className=" mt-2">
                            <div className="header-option userInfo">
                                <div className="flex flex-col items-center text-black hover:text-[#f36100]">
                                    <span className="header-option1">Hello, {user ? user?.displayName?.toUpperCase() || user.email : "Guest"}</span>
                                    <span className="header-option2">Account & Lists</span>
                                </div>
                            </div>
                        </Link>
                        <ReactTooltip place="bottom" type="dark" effect="solid" />

                        <Link data-tip="Orders" href="/orders" className="header-link">
                            <div className="header-option text-black">
                                <span className="header-option1">Returns</span>
                                <span className="header-option2">& Orders</span>
                            </div>
                        </Link>
                        <ReactTooltip place="bottom" type="dark" effect="solid" />

                        <Link data-tip="Prime" href="/prime" className="header-link" id="HeaderPrime">
                            <div className="header-option text-black">
                                <span className="header-option1">Your</span>
                                <span className="header-option2">Prime</span>
                            </div>
                        </Link>
                        <ReactTooltip place="bottom" type="dark" effect="solid" />

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {AccountinfoText.map((item, id) => (
                            <>
                                <Link href={`${item.link}`} key={id}>
                                    <div className="flex md:flex-col text-center gap-4 w-[18rem] border border-[#e4e3e3] p-4 rounded-xl cursor-pointer hover:bg-[#e4e3e3] items-center justify-center">
                                        <img src={item.image} alt="" className='w-16 h-[3.5rem]' />
                                        <div className="flex flex-col text-black">
                                            <span style={{ fontSize: "1.1rem" }}>{item.title}</span>
                                            <span style={{ fontSize: "0.85rem" }}>{item.info}</span>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Account