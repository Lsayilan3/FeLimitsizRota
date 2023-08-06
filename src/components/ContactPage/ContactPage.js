import contactPage from "@/data/contactPage";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { tagline, title, socials } = contactPage;

const inputs = ["name", "email", "message"];

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  };

  return (
    <section className="contact-page">
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <div className="contact-page__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <div className="contact-page__social">
                {socials.map(({ id, icon, href }) => (
                  <Link href={href}  key={id}>
                   <a  target="_blank">
                    <i className={icon}></i>
                  </a>
                  </Link>
                 
                ))}
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7}>
            <div className="contact-page__right">
              <div className="comment-form">
                <form
                  onSubmit={handleSubmit}
                  className="comment-one__form contact-form-validated"
                >
                  <Row>
                    <Col xl={6}>
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Adınız"
                          name="name"
                          required
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="E-posta adresi"
                          name="email"
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Yorum Yaz"
                          required
                        ></textarea>
                      </div>
                      <a href="mailto:kadirvarol_@hotmail.com">
                            <button
                        type="button"
                        className="thm-btn comment-form__btn"
                      >
                        Bir mesaj bir gönderin
                      </button>
                      </a>
                  
                    </Col>
                  </Row>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
