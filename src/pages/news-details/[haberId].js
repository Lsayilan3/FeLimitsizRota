import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const NewsDetails = () => {
  const router = useRouter();
  const { haberId } = router.query;

  return (
    <Layout pageTitle="Haber Detayları">
      <PageHeader title="Haber Detayları" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsDetailsPage haberId={haberId} />
    </Layout>
  );
};

export default NewsDetails;
