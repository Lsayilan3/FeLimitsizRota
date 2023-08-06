import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const TourDetails = () => {
    const router = useRouter();
    const { ulkeId } = router.query;
  return (
    <Layout pageTitle="Tur Detayları">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Popüler Bölgeler" page="Bölgeler" />
      <TourDetailsPage ulkeId={ulkeId} />
    </Layout>
  );
};

export default TourDetails;