import Head from "next/head";
import Layout from "../layout";
import { NextPageWithLayout } from "../models/interfaces";

const Work: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>myWork</title>
      </Head>
      <main>
        <h2>This is Work place</h2>
      </main>
    </>
  );
};

export default Work;

Work.getLayout = (page) => <Layout>{page}</Layout>;
