import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleGallery = ({ data }) => {

  const { photo } = data || {};

  const photoUrl = "https://api.limitsizrota.com";

  return (
    <li className="animated fadeInUp">
      <div className="gallery-one__img-box">
        <Image src={photoUrl + photo} alt={photo} />
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
