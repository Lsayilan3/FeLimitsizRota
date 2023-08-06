import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { getPhotoUrl } from './Service/UlkeService';

const SingleTour = ({ tour = {}, userSelect = false }) => {

  const { ulkeId, baslik, aciklama, foto } = tour || {};

  const photoUrl = getPhotoUrl();

  return (
    <div
      style={{ userSelect: userSelect ? "unset" : "none" }}
      className="popular-tours__single"
    >
      <div className="popular-tours__img">
        <Image src={photoUrl + foto} alt="" />
      </div>
      <div  className="popular-tours__content">
        <h3 className="popular-tours__title">
          <Link href={`/bolgeler/${ulkeId}`}>{baslik}</Link>
        </h3>
        <ul className="popular-tours__meta list-unstyled">
          <li>
            <Link  href={`/bolgeler/${ulkeId}`}>
              <a>
                <span  className="news-one__plus">{aciklama}</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleTour;
