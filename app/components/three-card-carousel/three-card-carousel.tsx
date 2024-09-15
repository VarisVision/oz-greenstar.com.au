'use client'

// components/Carousel.js (create this file if it doesn't exist)
import React from 'react';
import Slider from 'react-slick';

const ThreeCardCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop infinitely
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per interaction
  };

  const slides = [
    {
      id: 1,
      image: 'https://example.com/image1.jpg',
      title: 'Slide 1',
    },
    {
      id: 2,
      image: 'https://example.com/image2.jpg',
      title: 'Slide 2',
    },
    {
      id: 3,
      image: 'https://example.com/image3.jpg',
      title: 'Slide 3',
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.title} />
          <p>{slide.title}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ThreeCardCarousel;