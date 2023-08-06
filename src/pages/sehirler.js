import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsssPage from "@/components/TourDetails/TourDetailsPage";
import { tourDetailsSidebar } from "@/data/tourDetailsPage";
import React from "react";

const TourDetailss = () => {
  return (
    <Layout pageTitle="Tur Detayları">
      <MainSliderTwo />
      <TourDetailsssPage />
    </Layout>
  );
};

export default TourDetailss;
