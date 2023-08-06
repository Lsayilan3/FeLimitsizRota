import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const ReviewScoreBar = () => {
  const router = useRouter();
  const { rotaId } = router.query;
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const apiUrl = "https://api.limitsizrota.com/api/enPopulerListtCategories";
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:44375/WebAPI/api/puans/getlist?rotaId=${rotaId}`)
      .then((response) => {
        setDataa(response.data); // Assuming the response data is an object
        console.log(response.data);
      })
      .catch((error) => {
        console.log("API çekme hatası:", error);
      });
  }, [rotaId]);

  if (!dataa || dataa.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    
    <ReactVisibilitySensor
      offset={{ top: 10 }}
      delayedCall={true}
      onChange={onVisibilityChange}
      
    >
      <div>
        <div  className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6 }}>{dataa[0].hizmetler}</h3>
            <p  >{dataa[0].hizmetlerPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? dataa[0].hizmetlerPuan : 0}%` }}
            ></span>
          </div>
        </div>
        <div className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6 }}>{dataa[0].konum}</h3>
            <p>{dataa[0].konumPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? dataa[0].konumPuan : 0}%` }}
            ></span>
          </div>
        </div>
        <div className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6 }}>{dataa[0].kolayliklar}</h3>
            <p>{dataa[0].kolayliklarPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? dataa[0].kolayliklarPuan : 0}%` }}
            ></span>
          </div>
        </div>
        <div className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6 }}>{dataa[0].fiyat}</h3>
            <p>{dataa[0].fiyatPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? dataa[0].fiyatPuan : 0}%` }}
            ></span>
          </div>
        </div>
        <div className="tour-details__review-score__bar">
          <div className="tour-details__review-score__bar-top">
            <h3 style={{display:"inline-block", marginBottom: 6 }}>{dataa[0].yiyecek}</h3>
            <p >{dataa[0].yiyecekPuan}%</p>
          </div>
          <div className="tour-details__review-score__bar-line">
            <span
              className="animated slideInLeft"
              style={{ width: `${countStart ? dataa[0].yiyecekPuan : 0}%` }}
            ></span>
          </div>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};
export default ReviewScoreBar;
