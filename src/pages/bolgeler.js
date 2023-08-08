import Layout from "@/components/Layout/Layout";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import React from "react";
import { useRouter } from "next/router";

const TourDetails = () => {
  const router = useRouter();
  const { ulkeId } = router.query;
  return (
    <Layout pageTitle="Tur Detayları">
      <TourDetailsPage />
    </Layout>
  );
};

export default TourDetails;
