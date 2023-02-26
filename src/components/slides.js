import React, { Component } from 'react';
import Slider from "react-slick";
import "../styles.css";



import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Slideshow() {

    const images = [
        { src: "https://via.placeholder.com/1280x720", alt: "Imagen 1" },
        { src: "https://via.placeholder.com/1280x720", alt: "Imagen 2" },
        { src: "https://via.placeholder.com/1280x720", alt: "Imagen 3" },
    ];

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', color: 'red' }}
            onClick={onClick}
          >
          <FaArrowRight />
          </div>
        );
      };
      
      const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', color: 'red' }}
            onClick={onClick}
          >
       <FaArrowLeft />
          </div>
        );
      };

    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='sliderContainer'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Slideshow;