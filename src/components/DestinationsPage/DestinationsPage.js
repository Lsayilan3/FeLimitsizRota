import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleDestination from "../DestinationsOne/SingleDestination";
import Preloader from "../Preloader/Preloader";
import { getPhotoUrl, apiCek } from "../DestinationsOne/Service/rotaServicee";


const DestinationsPage = () => {
  const [loading, setLoading] = useState(true);
  const [visibleSpots, setVisibleSpots] = useState(10);
  const [data, setData] = useState([]);
  const [colValues, setColValues] = useState([]);


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
      {/* <Preloader loading={loading} /> */}
      <Container>
        <Masonry className="row position-relative">
          {data.slice(0, visibleSpots).map((destination, index) => (
            <SingleDestination
              key={destination.rotaAnasayifaId}
              data={destination}
              col={colValues[index]}
              photoUrl={photoUrl}
            />
          ))}
        </Masonry>
        {data.length > visibleSpots && (
          <div className="text-center">
            <button
              style={{ padding: "8px 40px 8px", marginTop:10 }}
              className="thm-btn comment-form__btn"
              onClick={() => setVisibleSpots(visibleSpots + 10)}
            >
              Daha Fazla Görüntüle
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default DestinationsPage;
