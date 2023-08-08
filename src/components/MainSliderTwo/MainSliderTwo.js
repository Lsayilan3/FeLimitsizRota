import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import Link from "next/link";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSliderTwo = () => {
  return (
    <section className="main-slider tour-details-slider">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {data.map((data) => (
            <SwiperSlide key={data.id}>
            <div 
              className="image-layer"
              style={{
                backgroundImage: `url(${photoUrl + data.photo})`,
              }}
            ></div>
            <Container>
              <div className="swiper-slide-inner">
                <div className="tour-details-slider_icon">
                  <Link href="https://www.youtube.com/@limitsizrota">
                    <a  target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                  </Link>
                
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </Container>
          </SwiperSlide>
          ))}
        </div>
        <div className="main-slider-nav">
          <div
            id="main-slider__swiper-button-prev"
            className="main-slider-button-prev"
          >
            <span className="icon-right-arrow"></span>
          </div>
          <div
            id="main-slider__swiper-button-next"
            className="main-slider-button-next"
          >
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
