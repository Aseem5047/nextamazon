import React, { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const images = [

    "https://m.media-amazon.com/images/G/31/img19/INKC/PRR/Image_1.png",
    "https://m.media-amazon.com/images/G/31/img19/INKC/PRR/Image_2.png",
    "https://m.media-amazon.com/images/G/31/img19/INKC/PRR/Image_3.png",
    "https://m.media-amazon.com/images/G/31/img19/INKC/PRR/Image_4.png"

]

const Reading = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = images.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }

    }, [index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)

        return () => {
            clearInterval(slider);
        }
    }, [index])

    return (
        <>

            <ul className="Entertainment-list">
                {images.map((image, id) => {

                    let position = "nextEntertainmentItem";
                    if (id === index) {
                        position = "activeEntertainmentItem"
                    }
                    if (id === index - 1 || (index === 0 && id === images.length - 1)) {
                        position = "lastEntertainmentItem"
                    }

                    return (
                        <li className={position}
                            key={id}>
                            <img src={image} alt="" style={{ boxShadow: "none" }} />

                            <div className="EntertainmentLeft" onClick={() => setIndex(index - 1)}>
                                <p>
                                    <ArrowBackIosIcon />
                                </p>
                            </div>
                            <div className="EntertainmentRight" onClick={() => setIndex(index + 1)}>
                                <p>
                                    <ArrowForwardIosIcon />
                                </p>
                            </div>
                        </li>
                    )

                })}
                <div className="Entertainment_content">
                    <span className="heading">
                        Read anywhere, anytime and for free
                    </span>
                    <span className="details">
                        Choose from hundreds of eligible eBooks, comics and more. With a catalogue of literature, fiction, quick reads, romance, non-fiction & eBooks in Indian languages, you will always find something to read.
                    </span>
                    <span className="type">
                        Explore Prime Reading
                    </span>
                </div>


            </ul>


        </>
    )
}

export default Reading