import React from "react";
import { Col, Image } from "react-bootstrap";
import { getPhotoUrl } from "./Service/takimService";

const SingleTeam = ({ data }) => {

  const { adi, baslik, foto, linkbir, linkiki, linkuc } = data || {};

  const photoUrl = getPhotoUrl();

  return (
    <Col xl={3} lg={6} md={6} className="animated fadeInLeft">
      <div className="team-one__single">
        <div className="team-one__img">
          <Image src={photoUrl + foto} alt="" />
        </div>
        <div className="team-one__content">
          <h4 className="team-one__name">{adi}</h4>
          <p className="team-one__title">{baslik}</p>
          <div className="team-one__social">
            <a href={linkbir} >
              <i className="fab fa-facebook"></i>
            </a>
            <a href={linkiki} >
              <i className="fab fa-twitter"></i>
            </a>
            <a href={linkuc} >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleTeam;
