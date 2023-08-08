import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import TourDetailsPage from "@/components/TourDetailssss/TourDetailsPage";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const TourDetailss = () => {
    const router = useRouter();
    const { sehirId } = router.query;
  return (
    <Layout pageTitle="Rotalar">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title="Popüler Rotalar" page="Rotalar" />
      <TourDetailsPage sehirId={sehirId} />
    </Layout>
  );
};

export default TourDetailss;