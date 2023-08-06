import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailssPage from "@/components/TourDetails/TourDetailsPage";
import { tourDetailsSidebar } from "@/data/tourDetailsPage";
import React from "react";

const TourDetailss = () => {
  return (
    <Layout pageTitle="Tur Detayları">
      <MainSliderTwo />
      <TourDetailssPage />
    </Layout>
  );
};

export default TourDetailss;
