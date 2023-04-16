import Head from "next/head";
import { useContext } from "react";
import WorkCard from "../components/work/workCard";
import MainContext from "../context/mainContext";
import Layout from "../layout";
import { NextPageWithLayout } from "../models/interfaces";
import style from "src/styles/component/_work.module.scss";

const Work: NextPageWithLayout = () => {
  const { works } = useContext(MainContext);

  const workList = works.map((item, index) => (
    <WorkCard value={item} index={index} key={index} />
  ));

  return (
    <>
      <Head>
        <title>myWork</title>
      </Head>
      <main className={style.workMain}>{workList}</main>
    </>
  );
};

export default Work;

Work.getLayout = (page) => <Layout>{page}</Layout>;
