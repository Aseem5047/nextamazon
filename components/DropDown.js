import React, { useState } from 'react'

import { RiCloseLine, RiComputerLine } from 'react-icons/ri'
import { BiChevronDown, BiNews, BiMobileVibration } from 'react-icons/bi'
import { TiSortAlphabeticallyOutline } from 'react-icons/ti'
import { GiRolledCloth } from 'react-icons/gi'
import { FiTrendingUp } from 'react-icons/fi'
import { AiFillThunderbolt } from 'react-icons/ai'
import { SiPrime } from 'react-icons/si'
import { MdSportsBasketball } from 'react-icons/md'
import Link from 'next/link'


const Dropdown = () => {
    const [active, setActive] = useState(false)

    const options = [
        "Home", "New Releases", "Electronics", "Prime", "Mobiles", "Computers", "Fashion", "Trending", "Sports & Fitness"
    ]

    const icons = [<TiSortAlphabeticallyOutline />, <BiNews />, <AiFillThunderbolt />, <SiPrime />, <BiMobileVibration />, <RiComputerLine />, <GiRolledCloth />, <FiTrendingUp />, <MdSportsBasketball />]

    return (
        <>
            <div className="cursor-pointer z-10">
                {active ? <RiCloseLine color="#fff" size={27} onClick={() => setActive(false)} className="-mt-1" /> :
                    <BiChevronDown color="#fff" size={27} onClick={() => setActive(true)} className="-mt-1" />}

                {active &&
                    <div className="flex justify-start bg-[#131921] p-4 fixed top-0 z-20 mt-[4.2rem] min-w-[12rem] shadow-md gap-4 rounded-md text-white">
                        <div className="flex flex-col justify-around">

                            {icons.map((icon, index) => (
                                <div key={`icon-${index}`}>
                                    <span>
                                        {icon}
                                    </span>
                                </div>
                            ))}

                        </div>
                        <div className="flex flex-col justify-evenly">
                            {options.map((option, index) => (
                                <Link href={`/${option.toLowerCase().split(" ").join("")}`} key={`option-${index}`}>
                                    <div className="hover:line-through cursor-pointer">
                                        <span>{option}</span>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Dropdown