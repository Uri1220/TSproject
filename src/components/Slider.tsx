import React from "react";
import { Carousel } from "react-responsive-carousel";
import rectangle from "../img/rectangle.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/style.scss";

const Slider = () => {
  const slidersImgs = [rectangle, rectangle, rectangle, rectangle];
  return (
    <section className="slider-block">
      <Carousel
        // autoPlay
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        swipeable={false}
        infiniteLoop={true}
        useKeyboardArrows
      // renderArrowPrev={(onClickHandler, hasPrev) => (
      //   <div
      //     onClick={onClickHandler}
      //     className="swiper-button-prev chief__swiper-button-prev"
      //   />
      // )}
      // renderArrowNext={(onClickHandler, hasNext) => (
      //   <div
      //     onClick={onClickHandler}
      //     className="swiper-button-next chief__swiper-button-next"
      //   />
      // )}
      >
        {slidersImgs.map((item, k) => {
          return (
            <div className="swiper-slide" key={k}>
              <picture>
                <img src={item} alt="" />
              </picture>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};
export default Slider;
