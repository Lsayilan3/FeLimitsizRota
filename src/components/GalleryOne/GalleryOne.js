import galleryOne from "@/data/galleryOne";
import React, { useState, useEffect } from "react";
import SingleGallery from "./SingleGallery";
import { apiCek } from "../GalleryOne/Service/mediaService";

const { bg, galleryData } = galleryOne;

const GalleryOne = () => {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  const apiCeks = async () => {
    const sonuc = await apiCek();
    setData(sonuc);
  };

  useEffect(() => {
    apiCeks();
  }, []);

  useEffect(() => {
    setVisibleData(data.slice(0, visibleCount));
  }, [data, visibleCount]);

  const loadMore = () => {
    setVisibleCount(visibleCount + 5);
  };

  return (
    <section className="gallery-one">
      <div
        className="gallery-one-bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="gallery-one__container-box clearfix">
        <ul className="list-unstyled gallery-one__content clearfix">
          {visibleData.map((data) => (
            <SingleGallery key={data.destekId} data={data} />
          ))}
        </ul>
        {visibleCount < data.length && (
          <div style={{ textAlign: "center" }}>
            <button
              style={{ padding: "5px 30px 5px", marginTop: 10 }}
              className="thm-btn comment-form__btn"
              onClick={loadMore}
            >
              Daha Fazla
            </button>
          </div>

        )}
      </div>
    </section>
  );
};

export default GalleryOne;
