import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsOne from "../NewsOne/SingleNewsOne";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const NewsPage = () => {

  const apiUrl = "https://api.limitsizrota.com/api/haberlers";

  const [data, setData] = useState([]);

  const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/getAll");
      setData(response.data);
    } catch (error) {
      console.log("API çekme hatası haberler", error);
    }
  };

  useEffect(() => {
    apiCek();
  }, []);

  return (
    <section className="news-one">
      <Container>
        <Row>
          {data.map((data) => (
            <Col
              xl={4}
              lg={6}
              md={6}
              key={data.id}
              className="animated fadeInUp"
            >
              <SingleNewsOne data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;
