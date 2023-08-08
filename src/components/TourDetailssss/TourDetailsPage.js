import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import TourDetailsLeft from "./TourDetailsLeft";
import { apiCek } from "./Service/rotaService";
import Preloader from "../Preloader/Preloader";


const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { sehirId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiCeks = async () => {
    const sonuc = await apiCek();
    setCategoriesData(sonuc);
    setLoading(false)
  };

  useEffect(() => {
    apiCeks();
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
          <TourDetailsLeft photoUrl={photoUrl} data={selectedCategory} />
        )}
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;