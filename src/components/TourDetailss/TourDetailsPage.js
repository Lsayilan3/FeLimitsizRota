import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import TourDetailsLeft from "./TourDetailsLeft";
import Preloader from "../Preloader/Preloader";
import { apiCek, getPhotoUrl } from "./Service/sehirlerService";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { bolgelerId } = router.query;
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
    (category) => category.bolgelerId === Number(bolgelerId)
  );

  const photoUrl = getPhotoUrl();

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