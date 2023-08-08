import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import dynamic from "next/dynamic";
import { ulkeCek } from "./Service/UlkeService";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    800: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 4,
      gutter: 30,
    },
  },
};

const PopularTours = () => {

  const [ulke, setUlke] = useState([]);

  const ulkeCeks = async () => {
    const sonuc = await ulkeCek();
    setUlke(sonuc);
  };

  useEffect(() => {
    ulkeCeks();
  }, []);
  const filteredUlke = ulke.filter((tour) => tour.yayin !== 2).sort((a, b) => a.sira - b.sira);
  
  return (
    <section className="popular-tours">
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Öne çıkan turlar</span>
          <h2 className="section-title__title">En Popüler Turlar</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel">
            <TinySlider settings={settings}>
                {filteredUlke.map((tour) => (
                  <SingleTour key={tour.ulkeId} tour={tour} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PopularTours;
