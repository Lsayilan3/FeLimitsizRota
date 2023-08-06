import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import TourDetailsLeft from "./TourDetailsLeft";
import Preloader from "../Preloader/Preloader";

const DestinationsDetailsPage = () => {
  const router = useRouter();
  const { rotaId } = router.query;
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://localhost:44375/WebAPI/api/rotaDetayis/getall")
      .then((response) => {
        setCategoriesData(response.data);
         setLoading(false);
      })
      .catch((error) => {
        console.log("api categorytur hatası", error);
      });
  }, []);


  const selectedCategory = categoriesData.find(
    (category) => category.rotaId === Number(rotaId)
  );
  const photoUrl = "https://api.limitsizrota.com";

  return (
    <section style={{paddingTop: 0}} className="popular-tours-two">
      {/* <Preloader loading={loading} /> */}
      <Container>
      {selectedCategory && (
              <TourDetailsLeft photoUrl={photoUrl} turData={selectedCategory} data={selectedCategory}  />
            )}
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;