import React from "react";
// import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


function Gallery({ image, title }) {

    const data = [];
    for (var i = 0; i < image.length; i++) {
        // console.log(image.length);
        var obj = { "image": image[i], "caption": title };
        data.push(obj);
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 4000,
        autoplay: true,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const settingsThunmbnail = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1200,
        autoplaySpeed: 4000,
        autoplay: true,
        pauseOnHover: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
    };

    // hidden md:flex next top-[14rem] -right-20 md:hover:bg-black p-7 rounded-full

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <p className="hidden md:flex next top-[14rem] -right-20 hover:bg-black/75 rounded-full w-16 h-16" onClick={onClick} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </p>
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <p className="hidden md:flex prev top-[14rem] -left-20 hover:bg-black/75 rounded-full w-16 h-16" onClick={onClick} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400 hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </p>
        );
    }

    console.log(image);
    return (
        <div className="flex flex-col w-full">
            <Slider {...settings} className="w-full md:w-[30rem] m-auto mb-4">
                {image.map((img, index) => (

                    <div className="flex flex-col justify-center items-center hover:shadow-xl p-10 pb-5 cursor-pointer" key={index}>
                        <Image alt="" width={350} height={300} src={img} className="m-auto h-[300px] w-[350px] rounded-xl" />
                        <p className="legend text-center mt-6 font-semibold text-xl">{title}</p>
                    </div>
                ))}

            </Slider>

            <Slider {...settingsThunmbnail} className="w-[40rem] m-auto mt-2 !hidden md:!block">
                {image.map((img, index) => (

                    <div className="flex flex-col justify-center items-center  p-10 pb-4 cursor-pointer hover:shadow-xl" key={index}>
                        <Image alt="" width={200} height={125} src={img} className="m-auto h-[125px] w-[200px] rounded-xl" />
                    </div>
                ))}

            </Slider>
        </div>
    );
}

export default Gallery;

