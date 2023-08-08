import React, { useState, useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { apiCek, getPhotoUrl } from "./Service/sehirlerService";

const TourDetailsLeft = ({userSelect = false }) => {
  const router = useRouter();
  const { bolgelerId } = router.query;
  
  const [data, setData] = useState([]);

  const apiCeks = async () => {
    const sonuc = await apiCek();
    setData(sonuc);
  };

  useEffect(() => {
    apiCeks();
  }, []);

  const photoUrl = getPhotoUrl();

  const filteredDataList = data
    .filter((data) => data.bolgelerId === Number(bolgelerId) && data.yayin !== 2)
    .sort((a, b) => a.sira - b.sira);

  return (
    <>
      <Row>
        {filteredDataList.map((data, index) => (
          <Col key={index} md={4}>
            <div
              style={{ userSelect: userSelect ? "unset" : "none" }}
              className="popular-tours__single"
            >
              <div className="popular-tours__img">
                <Image
                  src={photoUrl + data.foto}
                  alt=""
                />
              </div>
              <div className="popular-tours__content">
                <h4 className="popular-tours__title">
                  <Link href={`/rota/${data.sehirId}`}>{data.baslik}</Link>
                </h4>
                <ul className="popular-tours__meta list-unstyled">
                  <li>
                    <Link href={`/rota/${data.sehirId}`}>
                      <a>
                        <span className="news-one__plus">{data.aciklama}</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default TourDetailsLeft;
