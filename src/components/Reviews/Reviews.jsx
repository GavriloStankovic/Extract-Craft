import "./Reviews.scss";
import star from "../../assets/star/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import data from "../../utils/slider.json";
import "swiper/css";
import { swiperSettings } from "../../utils/sliderSettings";

const RATING = 5;

const Reviews = () => {
  return (
    <section className="container reviews-wrapper" aria-labelledby="reviews-heading">
      <div className="reviews-header">
        <h2 id="reviews-heading">Customer Reviews</h2>
        <button type="button" className="primary">
          VIEW ALL
        </button>
      </div>
      <Swiper
        {...swiperSettings}
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true }}
        a11y={{
          containerRole: "group",
          containerRoleDescriptionMessage: "carousel",
          containerMessage: "Customer reviews",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={`${item.name}-${index}`}>
            <article className="reviews-card">
              <h3>{item.name}</h3>
              <div
                className="stars"
                role="img"
                aria-label={`Rated ${RATING} out of 5 stars`}
              >
                {Array.from({ length: RATING }, (_, starIndex) => (
                  <img key={starIndex} src={star} alt="" />
                ))}
              </div>
              <p>{item.textOne}</p>
              <p>{item.textTwo}</p>
              <p>{item.textThree}</p>
              <p className="review-date">{item.date}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden-review-button">
        <button type="button" className="primary">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default Reviews;
