import Layout from "@/components/Layout/Layout";
import NewsPage from "@/components/NewsPage/NewsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const News = () => {
  return (
    <Layout pageTitle="Haberler">
      <PageHeader title="Son Haberler" page="Haberler" />
      <NewsPage />
    </Layout>
  );
};

export default News;
