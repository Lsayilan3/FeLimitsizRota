import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import {  getPhotoUrl } from "../GalleryOne/Service/mediaService";

const SingleGallery = ({ data }) => {

  const { foto } = data || {};

  const photoUrl = getPhotoUrl();

  return (
    <li className="animated fadeInUp">
      <div className="gallery-one__img-box">
        <Image src={photoUrl + foto } alt="" />
        <div className="gallery-one__iocn">
          <Link href="https://www.instagram.com/limitsiz_rota/">
            <a target="_blank" >
              <i className="fab fa-instagram"></i>
            </a>
          </Link>

        </div>
      </div>
    </li>
  );
};

export default SingleGallery;
