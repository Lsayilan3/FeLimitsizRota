import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";
import axios from "axios";
import Masonry from "react-masonry-component";
import { apiCek, getPhotoUrl } from "./Service/rotaServicee";


const DestinationsOne = () => {

  const [data, setData] = useState([]);
  const [colValues, setColValues] = useState([]);
  const [visibleSpots, setVisibleSpots] = useState(5);

  const fetchData = async () => {
    try {
      const response = await apiCek();
      const filteredData = response.filter((destination) => destination.yayin !== 2).sort((a, b) => a.sira - b.sira);
      setData(filteredData);
      const colValuesFromBackend = response.map((destination) => destination.col);
      setColValues(colValuesFromBackend);
    } catch (error) {
      console.log("API çekme hatası varış noktaları", error);
    }
  };
  
  

  useEffect(() => {
    fetchData();
  }, []);

  const photoUrl = getPhotoUrl();

  return (
    <section className="destinations-one destinations-page">
       <Container>
       <div className="section-title text-center">
        <span className="section-title__tagline">Rota Listeleri</span>
        <h2 className="section-title__title">Benzersiz Rotaları Keşfet</h2>
      </div>
        <Masonry className="row position-relative">
          {data.slice(0, visibleSpots).map((destination, index) => (
            <SingleDestination
              key={destination.rotaAnasayifaId}
              data={destination}
              col={colValues[index]}
              getApiUrlPhoto={photoUrl}
            />
          ))}
        </Masonry>
        {data.length > visibleSpots && (
          <div className="text-center">
            <button
               style={{ padding: "8px 40px 8px", marginTop:10 }}
              type="button"
              className="thm-btn comment-form__btn"
              onClick={() => setVisibleSpots(visibleSpots + 5)}
            >
              Daha Fazla
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default DestinationsOne;
