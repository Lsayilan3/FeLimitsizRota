import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { apiCek } from "./Service/sliderService";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSlider = () => {

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const apiCeks = async () => {
    const sonuc = await apiCek();
    setLoading(false)
    setData(sonuc);
  };

  useEffect(() => {
    apiCeks();
  }, []);



  return (
    <section className="main-slider">
      <Preloader loading={loading} />
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {data.map((data) => (
            <SingleSlide key={data.sliderId} data={data} />
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
            <span className="icon-right-arrow"></span>{" "}
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
