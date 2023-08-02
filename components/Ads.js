import React, { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from 'next/image';

const Ads = ({ images }) => {

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
                    <article className={position} id="ads" key={indexImage}>
                        <Image src={image} alt="banner_img" className="w-full m-auto h-[200px] md:h-[400px]" />
                    </article>
                );
            })}

            <p className="prev hover:bg-black p-7 rounded-full" onClick={() => setIndex(index - 1)}>
                <ArrowBackIosIcon />
            </p>

            <p className="next hover:bg-black p-7 rounded-full" onClick={() => setIndex(index + 1)}>
                <ArrowForwardIosIcon />
            </p>

        </div>
    )
}

export default Ads
