import DestinationsPage from "@/components/DestinationsPage/DestinationsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Destinations = () => {
  return (
    <Layout pageTitle="Varış Noktaları">
      <PageHeader title="Varış Noktaları" />
      <DestinationsPage />
    </Layout>
  );
};

export default Destinations;
