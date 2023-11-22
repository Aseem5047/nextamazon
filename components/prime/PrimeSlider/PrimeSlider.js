import React, { useState, useEffect } from 'react'

import { SliderItems } from './Data/SliderItems'
import { FeatureList } from './Data/FeatureList'
import Image from 'next/image';

const PrimeSlider = () => {
    const [type, setType] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = SliderItems.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
        FeatureList.map((feature) =>

            (
                index === feature.setIndex || index === feature.nextIndex || index === feature.nextToNextIndex
            ) && setType(feature.type)

        )
    }, [index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)

        return () => {
            clearInterval(slider);
        }
    }, [index])

    // console.log(type);

    return (
        <div className="flex flex-col gap-10">
            <div className="primeFeaturesList flex justify-center md:justify-end gap-[0.4rem] w-full max-w-[75rem] md:float-right -mt-[2.5rem] md:mr-[4.5rem] mb-[2.5rem] md:ml-auto cursor-pointer">

                {FeatureList.map((feature, id) => (
                    <div className={`${type === feature.type ? "w-full max-w-[10rem] flex flex-col justify-center text-center transform scale-110 relative z-[1] shadow-lg clip rounded-lg" : "w-full max-w-[10rem] flex flex-col justify-center text-center relative rounded-lg"}`}

                        onClick={() => setIndex(feature.setIndex)}

                        style={
                            {
                                background: `${feature.background}`,
                            }
                        }
                        key={id}

                    >
                        < div className="mainContainer" style={
                            {
                                backgroundImage: `url(${feature.image})`,
                            }
                        } key={id} />
                        <div className="text-white absolute bottom-0 left-0 right-0 p-[1.5rem] text-center my-0 mx-auto">
                            <span>{feature.title}</span>
                        </div>
                    </div>

                ))}

            </div >
            <div className="flex justify-center w-full m-auto">

                <ul className="items-list flex list-none relative md:w-[85%] h-[20rem] p-0 mt-[1rem]">
                    {
                        SliderItems.map((item, id) => {

                            let position = "nextItem";
                            if (id === index) {
                                position = "activeItem"
                            }
                            if (id === index - 1 || (index === 0 && id === SliderItems.length - 1)) {
                                position = "lastItem"
                            }

                            return (

                                <li
                                    className={position}
                                    key={id}
                                    style={{
                                        backgroundImage: `url(${item.image})`
                                    }}
                                    itemType={item.type}
                                >

                                    < div className="SliderItemsContent flex flex-col gap-4 m-auto md:ml-[50%] md:text-left w-[70%] md:w-[50%]" >
                                        <span className="text-[1rem] p-[0.5rem] w-fit rounded-md"
                                            style={
                                                {
                                                    background: `${item.titleBackground}`,
                                                    color: "white"
                                                }
                                            }>{(item.title).toUpperCase()}</span>
                                        <span className="SliderItemsSub text-[28px]" >{item.subtitle}</span>
                                        <span className="SliderItemsDesc text-[18px] font-normal" >{item.desc}</span>
                                        <span className="font-medium" >{item.type}</span>
                                    </div>
                                </li>

                            )
                        })


                    }
                    <div className="SliderLeft !bg-transparent !text-black hover:scale-125" onClick={() => setIndex(index - 1)}>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-black ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </p>
                    </div>
                    <div className="SliderRight !bg-transparent !text-black hover:scale-125" onClick={() => setIndex(index + 1)}>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-black ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </p>
                    </div>

                </ul >
            </div >
            <div className="max-w-[90vw] m-auto mt-[6rem] md:mt-[1rem] md:h-auto h-[15vh]">
                <Image width={200} height={200} src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/prrrefresh/June/2022/PMP_Page_1500x300_px.jpg" alt="" style={{ width: "100%", height: "100%" }} />
            </div>
        </div>
    )
}

export default PrimeSlider