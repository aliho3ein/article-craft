import Head from "next/head";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
/** */
import style from "src/styles/component/_shop.module.scss";

const Shop: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>shopCenter</title>
      </Head>
      <main className={style.shopMain}>
        <img
          src="https://www.gnidsr.ac.in/images/page-under-construction.png"
          alt="This page is under construction"
        />
      </main>
    </>
  );
};

export default Shop;

Shop.getLayout = (page: any) => <Layout>{page}</Layout>;
