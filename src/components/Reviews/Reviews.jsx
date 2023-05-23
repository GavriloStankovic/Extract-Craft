import React from "react";
import "./Reviews.scss";
import star from "../../assets/star/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../utils/slider.json";
import "swiper/css";

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <div className="reviews-header">
        <h1>Customer Reviews</h1>
        <button>VIEW ALL</button>
      </div>
      <Swiper spaceBetween={50} slidesPerView={3}>
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
    </div>
  );
};

export default Reviews;
