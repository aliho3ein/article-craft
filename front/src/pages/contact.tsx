import Head from "next/head";
import { FC } from "react";
import Layout from "../layout";
import { NextPageWithLayout } from "../models/interfaces";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>ContactMe</title>
      </Head>
      <main>Contact page</main>
    </>
  );
};

export default Contact;

Contact.getLayout = (page) => <Layout>{page}</Layout>;
