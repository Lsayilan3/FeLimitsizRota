import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";
import { useRouter } from "next/router";
import axios from "axios";
import Preloader from "../Preloader/Preloader";

const NewsDetailsPage = () => {
  const router = useRouter();
  const { haberId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.limitsizrota.com/api/haberlerCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
         setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectedCategory = categoriesData.find(
    (category) => category.haberlerCategoryId === Number(haberId)
  );

  return (
    <section className="news-details">
      <Preloader loading={loading} />
      <Container>
        <Row>
          {selectedCategory && (
              <NewsDetailsLeft categories={selectedCategory} />
            )}
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
