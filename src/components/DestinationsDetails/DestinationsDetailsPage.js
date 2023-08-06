import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DestinationsDetailsLeft from "./DestinationsDetailsLeft";
import { useRouter } from "next/router";
import axios from "axios";
import Preloader from "../Preloader/Preloader";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.limitsizrota.com/api/hedefListtCategories/getall")
      .then((response) => {
        setCategoriesData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Api Çekme Hatası Hedeflist Category",error);
      });
  }, []);

  const selectedCategory = categoriesData.find(
    (category) => category.hedefListtCategoryId === Number(categoryId)
  );

  return (
    <section className="destinations-details">
      <Preloader loading={loading} />
      <Container>
        {selectedCategory && (
          <DestinationsDetailsLeft categories={selectedCategory} />
        )}
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;