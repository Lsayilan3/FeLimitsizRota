import newsDetailsPage from "@/data/newsDetailsPage";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";

const {
  image,
  date,
  author,
  totalComments,
  title,
  texts,
  tags,
  socials,
  authorData,
  comments,
} = newsDetailsPage;

const NewsDetailsLeft = ({ categories }) => {

  const photoUrl = "https://api.limitsizrota.com";

  const { textOne, textTwo, textTree, textFour, totalComments, title, userPhoto, name, description, userTwoPhoto, nameTwo,
    message, userTreePhoto, nameTree, messageTwo, photo
  } = categories || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  }

  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={photoUrl + photo} alt={photo || ""} />
        <div className="news-one__date">
          <p>
            {date.split(" ").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span>
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href="/news-details">
              <a>
                <i className="far fa-user-circle"></i>
                {author}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <a>
                <i className="far fa-comments"></i>
                {totalComments} Comments
              </a>
            </Link>
          </li>
        </ul>
        <h3 className="news-details__title">{title}</h3>

        <p className="news-details__text">
          {textOne}
        </p>
        <p className="news-details__text">
          {textTwo}
        </p>
        <p className="news-details__text">
          {textTree}
        </p>
        <p className="news-details__text">
          {textFour}
        </p>

      </div>
      <div className="news-details__bottom">
        <p className="news-details__tags">
          <span></span>


        </p>
        <div className="news-details__social-list">
          {socials.map(({ id, icon, href }) => (
            <Link  href={href} key={id}>
              <a target="_blank" >
              <i className={icon}></i>
            </a>
            </Link>
          
          ))}
        </div>


      </div>   <div className="author-one">
        <div className="author-one__image">
          <Image src={photoUrl + userPhoto} alt={userPhoto || ""} />
        </div>
        <div className="author-one__content">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="comment-one">
        <h3 className="comment-one__title">{comments.length} Comments</h3>

        <div className="comment-one__single" >
          <div className="comment-one__image">
            <Image src={photoUrl + userTwoPhoto} alt={userTwoPhoto || ""} />
          </div>
          <div className="comment-one__content">
            <h3>{nameTwo}</h3>
            <p>{message}</p>
            <a href="#" className="thm-btn comment-one__btn">
              Reply
            </a>
          </div>
        </div>

        <div className="comment-one__single" >
          <div className="comment-one__image">
            <Image src={photoUrl + userTreePhoto} alt={userTreePhoto || ""} />
          </div>
          <div className="comment-one__content">
            <h3>{nameTree}</h3>
            <p>{messageTwo}</p>
            <a href="#" className="thm-btn comment-one__btn">
              Reply
            </a>
          </div>
        </div>

      </div>
      <div className="comment-form">
        <h3 className="comment-form__title">Yorum Yap</h3>
        <form onSubmit={handleSubmit} className="comment-one__form">
          <Row>
            <Col xl={6}>
              <div className="comment-form__input-box">
                <input style={{ border: "solid 1px #e8604c", opacity: 0.8 }} type="text" placeholder="Adınız" name="name" />
              </div>
            </Col>
            <Col xl={6}>
              <div className="comment-form__input-box">
                <input style={{ border: "solid 1px #e8604c", opacity: 0.8 }} type="email" placeholder="E-posta adresi" name="email" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className="comment-form__input-box">
                <textarea style={{ border: "solid 1px #e8604c", opacity: 0.8 }} name="message" placeholder="Yorum Yaz"></textarea>
              </div>
              <a href="mailto:kadirvarol_@hotmail.com">
                <button
                  type="button"
                  className="thm-btn comment-form__btn"
                >
                  Yorum Gönder
                </button>
              </a>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default NewsDetailsLeft;
