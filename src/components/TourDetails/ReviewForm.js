import React from "react";
import { Col, Row } from "react-bootstrap";

const ReviewForm = ({ reviews = [] }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ marginBottom: 0 }} className="tour-details__review-form">
      <h3 style={{ paddingBottom: 5 }} className="tour-details-two__title">Bir değerlendirme yazın</h3>
      <Row>
        <Col xl={6}>
          <div className="tour-details__review-form-left">
            <form onSubmit={handleSubmit} className="tour-details__review-form">
              <div className="tour-details__review-form-input">
                <input style={{ border: "solid 1px #e8604c" }} type="text" placeholder="Adınız" name="name" />
              </div>
              <div className="tour-details__review-form-input">
                <input style={{ border: "solid 1px #e8604c" }} type="email" placeholder="E-posta Adresi" name="email" />
              </div>
              <div className="tour-details__review-form-input">
                <input style={{ border: "solid 1px #e8604c" }} type="text" placeholder="İnceleme Başlığı" name="review" />
              </div>
            </form>
          </div>
        </Col>
        <Col xl={6}>
          <div className="tour-details__review-form-rate">
            {reviews.map(({ id, title, star }) => (
              <div key={id} className="tour-details__review-form-rate-single">
                <div className="tour-details__review-form-rate-left">
                  <span>{title}</span>
                </div>
                <div className="tour-details__review-form-rate-right">
                  {Array.from(Array(5)).map((_, i) => (
                    <i style={{ cursor: "pointer" }}
                      key={i}
                      className={`fa fa-star${i < star ? " active" : ""}`}
                    ></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <div className="tour-details__review-form-textarea">
        <form onSubmit={handleSubmit}>
          <textarea style={{ border: "solid 1px #e8604c" }} placeholder="Yorum Yaz"></textarea>
          <a href="mailto:kadirvarol_@hotmail.com">
            <button
              type="button"
              className="thm-btn tour-details__review-form-btn"
            >
              Bir Mesaj Gönderin
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
