import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import TourDetailsPage from "@/components/TourDetailss/TourDetailsPage";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const TourDetailss = () => {
    const router = useRouter();
    const { bolgelerId } = router.query;
  return (
    <Layout pageTitle="Tur Detayları">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Popüler Şehirler" page="Şehirler" />
      <TourDetailsPage bolgelerId={bolgelerId} />
    </Layout>
  );
};

export default TourDetailss;