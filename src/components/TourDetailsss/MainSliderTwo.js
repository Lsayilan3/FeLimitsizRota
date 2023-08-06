import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const apiUrl = "https://localhost:44375/WebAPI/api/rotaGaleris";
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);;
  const router = useRouter();
  const rotaId = parseInt(router.query.rotaId);

  // ...
  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      const filteredData = response.data.filter(item => item.resimTipiId === 1 && item.rotaId === rotaId);
      setData(filteredData);
    } catch (error) {
      console.log("API çekme hatası main slider two", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, [rotaId]);

  const photoUrl = "https://localhost:44375/WebAPI";
  return (
    <section style={{paddingBottom: 95}} className="main-slider tour-details-slider">
      {/* <Preloader loading={loading} /> */}
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {data.map((data) => (
            <SwiperSlide key={data.rotaGaleriId}>
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(${photoUrl + data.foto})`,
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
