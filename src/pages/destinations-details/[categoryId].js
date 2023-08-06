import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import DestinationsDetailsPage from '@/components/DestinationsDetails/DestinationsDetailsPage';
import Head from 'next/head';

const DestinationsDetails = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    
    <Layout pageTitle="Varış Noktaları Detayı">
      <PageHeader title="Varış Noktaları Detayı" page="Varış Noktaları" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DestinationsDetailsPage categoryId={categoryId} />
    </Layout>
  );
};

export default DestinationsDetails;
