import React from 'react';
import Slider from "react-slick";
import './date-slide.styles.scss';

const DateSlide = () => {
  const settings = {
    infinite: false,
    centerPadding: "40px",
    slidesToShow: 9,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          centerPadding: "40px",
          slidesToShow: 7,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          centerPadding: "24px",
          slidesToShow: 5,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          centerPadding: "8px",
          slidesToShow: 5,
          swipeToSlide: true,
        }
      }
    ]
  };

  const day = ['Sen','Sel','Rab','Kam','Jum','Sab','Min'];

  return (
    <div>      
      <Slider {...settings}>
        {day.map((value,index) => {
          return (
            <div key={index} className='date-content'>
              <h5>{value}</h5>
              <h5>{index + 1}</h5>       
            </div>
          );
        })}
        {day.map((value,index) => {
          return (
            <div key={index + 7} className='date-content'>
              <h5>{value}</h5>
              <h5>{index + 8}</h5>       
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default DateSlide