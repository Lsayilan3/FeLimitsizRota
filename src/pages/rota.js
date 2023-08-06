import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/TourDetailsss/MainSliderTwo";
import TourDetailssssPage from "@/components/TourDetails/TourDetailsPage";
import { tourDetailsSidebar } from "@/data/tourDetailsPage";
import React from "react";

const TourDetailss = () => {
  return (
    <Layout pageTitle="Tur Detayları">
      <MainSliderTwo />
      <TourDetailssssPage />
    </Layout>
  );
};

export default TourDetailss;
