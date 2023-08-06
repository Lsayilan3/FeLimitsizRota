import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/TourDetailsss/MainSliderTwo";

import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import React from "react";

const TourDetails = () => {
  return (
    <Layout pageTitle="Tur Detayları">
      <MainSliderTwo />
      <TourDetailsPage />
    </Layout>
  );
};

export default TourDetails;
