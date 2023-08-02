import React from "react";
// import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <p className="hidden md:flex next top-[14rem] -right-20 md:hover:bg-black p-7 rounded-full" onClick={onClick} >
                <ArrowForwardIosIcon />
            </p>
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <p className="hidden md:flex prev top-[14rem] -left-20  md:hover:bg-black p-7 rounded-full" onClick={onClick} >
                <ArrowBackIosIcon />
            </p>
        );
    }

    console.log(image);
    return (
        <div className="flex flex-col w-full">
            <Slider {...settings} className="w-full md:w-[30rem] m-auto mb-4">
                {image.map((img, index) => (

                    <div className="flex flex-col justify-center items-center hover:shadow-xl p-10 pb-5 cursor-pointer">
                        <img src={img} className="m-auto h-[300px] w-[350px] rounded-xl" />
                        <p className="legend" className="text-center mt-6 font-semibold text-xl">{title}</p>
                    </div>
                ))}

            </Slider>

            <Slider {...settingsThunmbnail} className="w-[40rem] m-auto mt-2 !hidden md:!block">
                {image.map((img, index) => (

                    <div className="flex flex-col justify-center items-center  p-10 pb-4 cursor-pointer hover:shadow-xl" key={index}>
                        <img src={img} className="m-auto h-[125px] w-[200px] rounded-xl" />
                    </div>
                ))}

            </Slider>
        </div>
    );
}

export default Gallery;

