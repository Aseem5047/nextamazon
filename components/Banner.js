import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const Banner = ({ images }) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = images.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, images]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)

        return () => {
            clearInterval(slider);
        }
    }, [index])

    return (
        <div className="relative top-[6.5rem]">
            {images.map((image, indexImage) => {
                let position = "nextSlide";
                if (indexImage === index) {
                    position = "activeSlide"
                }
                if (indexImage === index - 1 || (index === 0 && indexImage === images.length - 1)) {
                    position = "lastSlide"
                }

                return (
                    <article className={position} id="banner" key={indexImage}>
                        <Image src={image} alt="banner_img" className="banner-img" layout="fill" />
                    </article>
                );
            })}

            <p className="prev hover:bg-black/75 rounded-full w-16 h-16" onClick={() => setIndex(index - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </p>

            <p className="next  hover:bg-black/75 rounded-full w-16 h-16" onClick={() => setIndex(index + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </p>

        </div>
    )
}

export default Banner
