import React, { useState, useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { apiCek, getPhotoUrl } from "./Service/bolgelerService";

const TourDetailsLeft = ({  userSelect = false }) => {
  const router = useRouter();
  const { ulkeId } = router.query;



  const [dataList, setDataList] = useState([]);

  const apiCeks = async () => {
    const sonuc = await apiCek();
    setDataList(sonuc);
  };

  useEffect(() => {
    apiCeks();
  }, []);

  const photoUrl = getPhotoUrl();

  const filteredDataList = dataList
    .filter((data) => data.ulkeId === Number(ulkeId) && data.yayin !== 2)
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
            <Link href={`/sehirler/${data.bolgelerId}`}>{data.baslik}</Link>
          </h4>
          <ul className="popular-tours__meta list-unstyled">
            <li>
              <Link href={`/sehirler/${data.bolgelerId}`}>
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
