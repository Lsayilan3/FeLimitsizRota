import newsOne from "@/data/newsOne";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsOne from "./SingleNewsOne";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const {  newsData } = newsOne;

const NewsOne = () => {

  const apiUrl = "https://api.limitsizrota.com/api/haberlers";

  const [data, setData] = useState([]);
  const [colValues, setColValues] = useState([]);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      const firstFiveData = response.data.slice(0, 3); // İlk 5 veriyi al
      setData(firstFiveData);

      // Backend'den gelen verilere göre col değerlerini ayarla
      const colValuesFromBackend = firstFiveData.map((destination) => destination.col);
      setColValues(colValuesFromBackend);
    } catch (error) {
      console.log("API çekme hatası", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  const photoUrl = "https://api.limitsizrota.com";
  return (
    <section className="news-one">
      <Container>
        <div className="news-one__top">
          <Row>
            <Col xl={9} lg={9}>
              <div className="news-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Blog Gönderisinden</span>
                  <h2 className="section-title__title">Haberler & Makaleler</h2>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3}>
              <div className="news-one__top-right">
                <Link href="/news">
                  <a className="news-one__btn thm-btn">Tüm Haberler</a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="news-one__bottom">
          <Row>
            
            {data.map((data) => (
              <Col xl={4} lg={4} key={data.haberlerId} className="animated fadeInUp">
                <SingleNewsOne photoUrl={photoUrl} data={data} />
              </Col>
            ))}
        
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default NewsOne;
