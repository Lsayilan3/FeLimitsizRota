import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import TourDetailsLeft from "./TourDetailsLeft";
import Preloader from "../Preloader/Preloader";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { sehirId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/rotas/getall")
      .then((response) => {
        setCategoriesData(response.data);
         setLoading(false);
      })
      .catch((error) => {
        console.log("api categorytur hatası", error);
      });
  }, []);


  const selectedCategory = categoriesData.find(
    (category) => category.sehirId === Number(sehirId)
  );

  const photoUrl = "https://api.limitsizrota.com";

  return (
    <section className="popular-tours-two">
    <Preloader loading={loading} />
    <Container>
    {selectedCategory && (
            <TourDetailsLeft photoUrl={photoUrl}  data={selectedCategory}  />
          )}
    </Container>
  </section>
  );
};

export default DestinationsDetailsPage;