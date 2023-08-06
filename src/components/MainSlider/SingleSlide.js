
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { getPhotoUrl } from "./Service/sliderService";

const SingleSlide = ({ data }) => {

  const { baslik, altyazi, foto, } = data || {};

  const photoUrl = getPhotoUrl();

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${photoUrl + foto})`,
        }}
      ></div>
      <div className="image-layer-overlay"></div>
      <Container>
        <div className="swiper-slide-inner">
          <Row>
            <Col xl={12}>
              <h2>{altyazi}</h2>
              <p>{baslik}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
