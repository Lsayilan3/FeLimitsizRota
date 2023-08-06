


import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios"; // axios kütüphanesini ekleyin

const ReviewForm = ({ reviews = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reviewTitle: "",
    reviewText: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form verilerini kontrol edin ve API'ye gönderin
    if (formData.name && formData.email && formData.reviewTitle && formData.reviewText) {
      axios
        .post("https://localhost:44375/WebAPI/api/yorumlars", {
          name: formData.name,
          email: formData.email,
          reviewTitle: formData.reviewTitle,
          reviewText: formData.reviewText,
        })
        .then((response) => {
          // İsteğe bağlı olarak başarılı bir şekilde gönderildiğine dair bir mesaj gösterebilirsiniz
          alert("Yorum başarıyla gönderildi.");
        })
        .catch((error) => {
          // Hata durumunda hatayı işleyebilirsiniz
          alert("Yorum gönderilirken bir hata oluştu.");
          console.log("API hatası", error);
        });
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div style={{ marginBottom: 0 }} className="tour-details__review-form">
      <h3 style={{ paddingBottom: 5 }} className="tour-details-two__title">Bir değerlendirme yazın</h3>
      <Row>
        <Col xl={6}>
          <div className="tour-details__review-form-left">
            <form onSubmit={handleSubmit} className="tour-details__review-form">
              <div className="tour-details__review-form-input">
                <input style={{ border: "solid 1px #e8604c", opacity: 0.5 }} type="text" placeholder="Adınız" name="name" />
              </div>
              <div className="tour-details__review-form-input">
                <input style={{ border: "solid 1px #e8604c", opacity: 0.5 }} type="email" placeholder="E-posta Adresi" name="email" />
              </div>
              <div className="tour-details__review-form-input">
                <input
                  style={{ border: "solid 1px #e8604c", opacity: 0.5 }}
                  type="text"
                  placeholder="İnceleme Başlığı"
                  name="reviewTitle" // "name" özelliği "reviewTitle" olarak değiştirildi
                />
              </div>

              <div className="tour-details__review-form-textarea">
                <textarea
                  style={{ border: "solid 1px #e8604c", opacity: 0.5 }}
                  placeholder="Yorum Yaz"
                  name="reviewText" // "name" özelliği "reviewText" olarak değiştirildi
                ></textarea>
                <button type="submit" className="thm-btn tour-details__review-form-btn">
                  Bir Mesaj Gönderin
                </button>

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

    </div>
  );
};

export default ReviewForm;
