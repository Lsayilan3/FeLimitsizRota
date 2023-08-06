import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";



const DestinationsDetailsLeft = ({ categories }) => {
  const router = useRouter();

  const { textOne, textTwo, detayLeftOne, detayRightOne, detayLeftTwo, detayRightTwo, detayLeftTree, detayRightTree,
    detayLeftFour, detayRightFour, detayLeftFive, detayRightFive, questionOne, answerOne, questionTwo, answerTwo,
    questionTree, answerTree, photo, photoBir, photoIki, photoUc, photoDort } =
    categories || {};

  const photoUrl = "https://api.limitsizrota.com";
  
  return (
    <div className="destinations-details__left">
      <div className="destinations-details__img">

        <Row className="mb-4">
          <Col xs={4}>
            <Image src={photoUrl + photoIki} alt={photoIki || ""} />
          </Col>
          <Col xs={4}>
            <Image src={photoUrl + photoUc} alt={photoUc || ""} />
          </Col>
          <Col xs={4}>
            <Image src={photoUrl + photoDort} alt={photoDort || ""} />
          </Col>
        </Row>
        <Row >
          <Col xs={6}>
            <Image src={photoUrl + photo} alt={photo || ""} />
          </Col>
          <Col xs={6}>
            <Image src={photoUrl + photoBir} alt={photoBir || ""} />
          </Col>
        </Row>
      </div>
      <div className="destinations-details__discover">
        <h3 className="destinations-details__title">Keşfedin</h3>
        <p

          className="destinations-details__discover-text"
        >
          {textOne}
        </p>
        <p
          className="destinations-details__discover-text"
        >
          {textTwo}
        </p>
      </div>
      <div style={{ paddingBottom: 22 }} className="destinations-details__overview">
        <h3 style={{ paddingBottom: 40 }} className="destinations-details__title">Genel Bakış</h3>
        <ul className="list-unstyled destinations-details__overview-list">
          <li>
            <div className="destinations-details__overview-left">
              <p>{detayLeftOne}</p>
            </div>
            <div className="destinations-details__overview-right">
              <p>{detayRightOne}</p>
            </div>
          </li>
          <li>
            <div className="destinations-details__overview-left">
              <p>{detayLeftTwo}</p>
            </div>
            <div className="destinations-details__overview-right">
              <p>{detayRightTwo}</p>
            </div>
          </li>
          <li>
            <div className="destinations-details__overview-left">
              <p>{detayLeftTree}</p>
            </div>
            <div className="destinations-details__overview-right">
              <p>{detayRightTree}</p>
            </div>
          </li>
          <li>
            <div className="destinations-details__overview-left">
              <p>{detayLeftFour}</p>
            </div>
            <div className="destinations-details__overview-right">
              <p>{detayRightFour}</p>
            </div>
          </li>
          <li>
            <div className="destinations-details__overview-left">
              <p>{detayLeftFive}</p>
            </div>
            <div className="destinations-details__overview-right">
              <p>{detayRightFive}</p>
            </div>
          </li>

        </ul>
      </div>

      <div className="destinations-details__faq" id="accordionPanelsStayOpenExample">
        <div className="accrodion-grp faq-one-accrodion">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              {questionOne}
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              {answerOne}
            </div>
          </div>
        </div>
        <div className="accrodion-grp faq-one-accrodion">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
              {questionTwo}
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              {answerTwo}
            </div>
          </div>
        </div>
        <div className="accrodion-grp faq-one-accrodion">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              {questionTree}
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              {answerTree}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsDetailsLeft;

