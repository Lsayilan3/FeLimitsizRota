import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { fetchData, fetchDataList, fetchGunler, fetchPhotos, fetchRota, getPhotoUrl } from "./Service/rotaDetayiService";



const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;

const TourDetailsLeft = ({ userSelect = false }) => {
  const router = useRouter();
  const { rotaId } = router.query;

  const [dataList, setDataList] = useState([]);
  const [foto, setFoto] = useState([]);
  const [data, setData] = useState([]);
  const [gunler, setGunler] = useState([]);
  const [rota, setRota] = useState([]);

  useEffect(() => {
    fetchDataList().then((data) => setDataList(data));
    fetchPhotos().then((data) => setFoto(data));
    fetchData(rotaId).then((data) => setData(data));
    fetchGunler(rotaId).then((data) => setGunler(data));
    fetchRota(rotaId).then((data) => setRota(data));
  }, [rotaId]);
  const photoUrl = getPhotoUrl();

  const images = foto
    .filter((data) => data.rotaId === Number(rotaId) && data.resimTipiId === 2)
    .map((data) => ({
      original: photoUrl + data.foto,
      thumbnail: photoUrl + data.foto,
      originalAlt: data.baslik,
      thumbnailAlt: data.baslik,
    }));
    
  const filteredDataList = dataList
    .filter((data) => data.rotaId === Number(rotaId) && data.yayin !== "2")
    .sort((a, b) => a.sira - b.sira);
  return (
    <>

      {rota.length > 0 ? (
        <h1
          style={{
            fontFamily: 'Asap Condensed, sans-serif',
            fontWeight: 700,
            paddingBottom: '30px',
            fontSize: '44px',
            color: '#202020',
            fontWeight: 700,
            textTransform: 'uppercase',
            lineHeight: 1.33333
          }}
        >
          {rota[0].baslik}
        </h1>
      ) : (
        <p>Veri bulunamadı</p>
      )}

      {rota.length > 0 ? (
        <p>{rota[0].aciklama}</p>
      ) : (
        <p>Veri bulunamadı</p>
      )}

      {filteredDataList.map((data, index) => (
        <div key={data.rotaDetayiId} className="destinations-details__left">
          <div className="destinations-details__img">
            <div className="tour-details-two__left">
              <section className="tour-details">
                <h1 style={{ paddingTop: '30px', fontFamily: "Arial", color: '#202020', fontWeight: 700, }}
                  className="tour-details-two__title">{data.ozet}</h1>
                <Row className="mb-4">
                  <Col xl={9}>
                    <h1 style={{ marginBottom: '4px', fontFamily: 'Asap Condensed, sans-serif', color: '#202020', fontWeight: 700, }}
                      className="tour-details-two__title" >{data.baslik}</h1>
                    <Image style={{ borderRadius: 0, }}
                      src={photoUrl + data.foto}
                    />
                  </Col>
                  <Col xl={3}></Col>
                </Row>
              </section>
              <Container>
                <Row>
                  <Col xl={9}>
                    <div className="tour-details-two__overview">
                      <p
                        style={{
                          fontWeight: 500,
                        }}
                        className="tour-details-two__overview-text"
                        dangerouslySetInnerHTML={{ __html: data.aciklama }}
                      ></p>
                    </div>
                  </Col>
                  <Col xl={3}></Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      ))}
      <Col xl={9}>
        <ImageGallery style={{ marginBottom: '111px' }} additionalClass="custom-image-gallery" items={images} showFullscreenButton={false} showPlayButton={false} />
        <br />
        {gunler.map((gun, index) => (
          <div className={`accrodion-grp faq-one-accrodion collapsed`} key={gun.gunlerId}>
            <h2 className="accordion-header" id={`panelsStayOpen-heading${gun.gunlerId}`}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${gun.gunlerId}`} aria-expanded={false} aria-controls={`panelsStayOpen-collapse${gun.gunlerId}`}>
                {gun.baslik}
              </button>
            </h2>
            <div id={`panelsStayOpen-collapse${gun.gunlerId}`} className={`accordion-collapse collapse collapsed`} aria-labelledby={`panelsStayOpen-heading${gun.gunlerId}`}>
              <div className="accordion-body">
                {gun.aciklama}
              </div>
            </div>
          </div>
        ))}
        <br />
        <div style={{ paddingBottom: 50 }} className="tour-details-two__location">
          <h2 style={{ color: "gray" }} className="tour-details-two__title">Tur Konum</h2>
          {data && data.harita ? (
            <iframe
              src={data.harita} // Use data.harita if it exists
              className="tour-details-two__location-map"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Loading map...</p>
          )}
        </div>
        <br />
        <h3 className="tour-details-two__title review-scores__title">
          İnceleme Puanları
        </h3>
        <div style={{ marginBottom: 100, }} className="tour-details__review-score">
          <div className="tour-details__review-score-ave">
            <div className="my-auto">
              <h3 style={{ marginLeft: 4 }}>{data.genelPuan}</h3>
              <p>
                <i className="fa fa-star"></i> Mükemmel
              </p>
            </div>
          </div>
          <div className="tour-details__review-score__content">
            <ReviewScoreBar />
          </div>
        </div>
        {/* <ReviewForm reviews={reviews} /> */}
      </Col>
    </>
  );
};

export default TourDetailsLeft;
