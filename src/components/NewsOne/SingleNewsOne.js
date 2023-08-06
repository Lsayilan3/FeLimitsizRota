import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect, Fragment } from "react";
import { Image } from "react-bootstrap";

const SingleNewsOne = ({ news = {}, newsTwo = false, data }) => {


  const { haberId, author, comments, date, photo, title } = data || {};

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (haberId) {
          const response = await axios.get(`https://api.limitsizrota.com/api/haberlers/getlist?haberId=${haberId}`);
          setSpots(response.data.data);
        } else {
          const response = await axios.get("https://api.limitsizrota.com/api/haberlers/getall");
          setSpots(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [haberId]);

  const photoUrl = "https://api.limitsizrota.com";
  return (
    <div

      className={
        newsTwo ? "news-one__single animated fadeInUp" : "news-one__single"
      }
      style={{ userSelect: newsTwo ? "none" : "unset" }}
    >
      <div className="news-one__img">
        <Image src={photoUrl + photo} alt={photo}  />
        <Link href={`/news-details/${haberId}`}>
          <a>
            <span className="news-one__plus"></span>
          </a>
        </Link>
        <div className="news-one__date">
          <p>

            <Fragment>
              <span>{date}</span>
              <br />
            </Fragment>

          </p>
        </div>
      </div>
      <div className="news-one__content">
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href={`/news-details/${haberId}`}>
              <a>
                <i className="far fa-user-circle"></i>
                {author}
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/news-details/${haberId}`}>
              <a>
                <i className="far fa-comments"></i>
                {comments} Comments
              </a>
            </Link>
          </li>
        </ul>
        <h3 className="news-one__title">
          <Link href={`/news-details/${haberId}`}>
            <a>
              <span className="news-one__plus">{title}</span>
            </a>
          </Link>

        </h3>
      </div>
    </div>
  );
};

export default SingleNewsOne;
