import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";
import {  getPhotoUrl } from "./Service/rotaServicee";

const SingleDestination = ({ data, col }) => {
  const { rotaId, foto, baslik,aciklama } = data || {};

  const photoUrl = "https://api.limitsizrota.com";

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
        <Image src={photoUrl + foto} alt={foto} />
          <div className="destinations-one__content">
            <p className="destinations-one__sub-title">{aciklama}</p>
            <h2 className="destinations-one__title">
              <Link href={`/rota-detayi/${rotaId}`} passHref>
                <a>{baslik}</a>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleDestination;
