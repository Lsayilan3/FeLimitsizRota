import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { fetchPuans } from "./Service/rotaDetayiService";

const ReviewScoreBar = () => {
  const router = useRouter();
  const { rotaId } = router.query;
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPuans(rotaId).then((data) => setData(data));
  }, [rotaId]);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    
    <ReactVisibilitySensor
      offset={{ top: 10 }}
      delayedCall={true}
      onChange={onVisibilityChange}
      
    >
      <div>
      <div style={{ marginBottom: 100, }} className="tour-details__review-score">
          <div className="tour-details__review-score-ave">
            <div className="my-auto">
              <h3 style={{ marginLeft: 4 ,fontSize: 120 }}>{data[0].genelPuan}</h3>
              <p style={{fontSize: 26}}> 
                <i className="fa fa-star"></i> Mükemmel
              </p>
            </div>
          </div>
          <div className="tour-details__review-score__content">
        <div  className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6, fontSize: 17 }}>{data[0].hizmetler}</h3>
            <p  >{data[0].hizmetlerPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? data[0].hizmetlerPuan : 0}%` }}
            ></span>
          </div>
        </div>
        <div className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6,fontSize: 17  }}>{data[0].konum}</h3>
            <p>{data[0].konumPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? data[0].konumPuan : 0}%` }}
            ></span>
          </div>
        </div>
        <div className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6 ,fontSize: 17 }}>{data[0].kolayliklar}</h3>
            <p>{data[0].kolayliklarPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? data[0].kolayliklarPuan : 0}%` }}
            ></span>
          </div>
        </div>
        <div className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6,fontSize: 17  }}>{data[0].fiyat}</h3>
            <p>{data[0].fiyatPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? data[0].fiyatPuan : 0}%` }}
            ></span>
          </div>
        </div>
        <div className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6 ,fontSize: 17}}>{data[0].yiyecek}</h3>
            <p >{data[0].yiyecekPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? data[0].yiyecekPuan : 0}%` }}
            ></span>
          </div>
        </div>
      </div>
      </div>
        </div>
    </ReactVisibilitySensor>
  );
};
export default ReviewScoreBar;
