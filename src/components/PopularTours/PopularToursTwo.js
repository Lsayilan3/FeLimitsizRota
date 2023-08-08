import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { ulkeCek } from "./Service/UlkeService";


const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = ({ toursPage = false }) => {

  const [visibleTours, setVisibleTours] = useState(6);
  const [loading, setLoading] = useState(true);

  const [ulke, setUlke] = useState([]);

  const ulkeCeks = async () => {
    const sonuc = await ulkeCek();
    setUlke(sonuc);
    setLoading(false)
  };

  useEffect(() => {
    ulkeCeks();
  }, []);

  const filteredUlke = ulke.filter((tour) => tour.yayin !== 2).sort((a, b) => a.sira - b.sira);

  return (
    <section className="popular-tours-two">
      <Preloader loading={loading} />
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {filteredUlke.slice(0, visibleTours).map((tour) => (
            <Col
              key={tour.id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
        {filteredUlke.length > visibleTours && (
          <div className="text-center">

            <button
           style={{ padding: "8px 40px 8px" }}
              type="button"
              className="thm-btn comment-form__btn"
              onClick={() => setVisibleTours(visibleTours + 6)}
            >
              Daha Fazla
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default PopularToursTwo;
