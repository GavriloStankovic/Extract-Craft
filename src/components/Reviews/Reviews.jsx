import React from "react";
import "./Reviews.scss";
import star from "../../assets/star/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../utils/slider.json";
import "swiper/css";
import { swiperSettings } from "../../utils/sliderSettings";

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <div className="reviews-header">
        <h1>Customer Reviews</h1>
        <button>VIEW ALL</button>
      </div>
      <Swiper {...swiperSettings}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="reviews-card">
              <h1>{item.name}</h1>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p>{item.textOne}</p>
              <p>{item.textTwo}</p>
              <p>{item.textThree}</p>
              <h2>{item.date}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden-review-button">
        <button>VIEW ALL</button>
      </div>
    </div>
  );
};

export default Reviews;
