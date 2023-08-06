import testimonialOne from "@/data/testimonialOne";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SingleTestimonial from "./SingleTestimonial";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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
    768: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 3,
      gutter: 30,
    },
  },
};
const { shape1, shape2, tagline, title, testimonials, bg } = testimonialOne;

const TestimonialOne = ({ aboutPage = false }) => {

  const apiUrl = "https://api.limitsizrota.com/api/hikayelers";

  const [dataa, setDataa] = useState([]);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setDataa(response.data);
    } catch (error) {
      console.log("API çekme hatası", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);


  const photoUrl = "https://api.limitsizrota.com";
  return (
    <section
      className={
        aboutPage ? "testimonial-one about-page-testimonial" : "testimonial-one"
      }
    >
      {aboutPage ? (
        <div
          className="about-page-testimonial-map"
          style={{ backgroundImage: ` url(${bg.src})` }}
        ></div>
      ) : (
        <>
          <div className="testimonial-one-shape-2 float-bob-y">
            <Image src="" alt="" />
          </div>
          <div className="testimonial-one-shape-3 animated slideInRight">
            <Image src="" alt="" />
          </div>
        </>
      )}
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Geri Bildirimler</span>
          <h2 className="section-title__title"></h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="testimonial-one__carousel">
              {dataa.length > 0 ? (
                <TinySlider settings={settings}>
                  {dataa.map((data) => (
                    <SingleTestimonial photoUrl={photoUrl} key={data.hikayelerId} data={data} />
                  ))}
                </TinySlider>
              ) : (
                <p>Veriler yükleniyor...</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialOne;
