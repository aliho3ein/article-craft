import Head from "next/head";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
/** */

const Shop: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>shopCenter</title>
      </Head>
      <main>
        <h2>this is shop area</h2>
      </main>
    </>
  );
};

export default Shop;

Shop.getLayout = (page: any) => <Layout>{page}</Layout>;
