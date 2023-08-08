import footerData from "@/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { logo, icons, companies, explore, social, year, author, about } =
  footerData;

const SiteFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Container>
          <div className="site-footer__top-inner">
            <Row>
              <Col xl={5} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__about">
                  <div className="logo-box" style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                    <Link href="/">
                      <a aria-label="logo image" style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
                        <Image src={logo.src} width={155} alt="" />
                        <h3 style={{ marginLeft: '-105px', color: "white", marginBottom: 3 }}>Limitsiz Rota</h3>
                      </a>
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">{about}</p>
                  <ul className="footer-widget__about-contact list-unstyled">
                    {icons.map(({ id, icon, content, subHref }) => (
                      <li key={id}>
                        <div className="icon">
                          <i className={icon}></i>
                        </div>
                        <div className="text">
                          {subHref ? (
                            <a href={`${subHref}:${content}`}>{content}</a>
                          ) : (
                            <p>{content}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={3} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__company clearfix">
                  <h3 className="footer-widget__title">Şirket</h3>
                  <ul className="footer-widget__company-list list-unstyled">
                    {companies.map(({ id, link, title }) => (
                      <li key={id}>
                        {link.includes("/") ? (
                          <Link href={link}>{title}</Link>
                        ) : (
                          <a target="_blank" rel="noreferrer">
                            {title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__newsletter">
                  <h3 className="footer-widget__title">Güncellemeleri Al</h3>
                  <form
                    className="footer-widget__newsletter-form mc-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                        required
                      />
                      <a href="mailto:ajanssahin@hotmail.com">
                        <button
                          type="button"
                          className="footer-widget__newsletter-btn"
                          style={{ padding: "15px 139px 15px" }}
                        >
                          Bize Katıl
                        </button>
                      </a>
                    </div>
                  </form>
                  <div className="mc-form__response text-center"></div>
                  <div className="footer-widget__newsletter-bottom">
                    <div className="footer-widget__newsletter-bottom-icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="footer-widget__newsletter-bottom-text">
                      <p>Gizlilik ve tüm politika şartları saklıdır</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-left">
                  <div className="footer-widget__social">
                    {social.map(({ icon, link }, index) => (
                      <Link href={link} key={index}>
                        <a target="_blank" >
                          <i className={`fab ${icon}`}></i>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="site-footer__bottom-right">
                  <p>
                    @ Tüm Telif Hakkı {year}, <a href="#">{author}</a>
                  </p>
                </div>
                <div className="site-footer__bottom-left-arrow">
                  <a href="#" className="scroll-to-target scroll-to-top">
                    <span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
