import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/TourDetailsss/MainSliderTwo";
import TourDetailsPage from "@/components/TourDetailsss/TourDetailsPage";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";


const TourDetailss = () => {

    const router = useRouter();
    const { rotaId } = router.query;
    
  return (
    <Layout pageTitle="Rota Detayları">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSliderTwo  rotaId={rotaId}/>
      <TourDetailsPage rotaId={rotaId} />
    </Layout>
  );
};

export default TourDetailss;