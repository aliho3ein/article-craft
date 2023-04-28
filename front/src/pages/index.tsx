import Head from "next/head";
import { NextPageWithLayout } from "../models/interfaces";
import Layout from "../layout";
import style from "src/styles/component/_about.module.scss";
import Header from "../components/header/header";
import { useRef } from "react";
import AboutText from "../components/about/aboutText";
import { useContext } from "react";
import MainContext from "../context/mainContext";

/** ABOUT/HOME **/
const Home: NextPageWithLayout = () => {
  const { state } = useContext(MainContext);

  const aboutRef = useRef<HTMLHeadingElement>(null);

  const result = state!.user.map((user, index) => (
    <AboutText key={index} data={user} />
  ));

  return (
    <>
      <Head>
        <title>aboutMe</title>
      </Head>
      <Header />
      <main className={style.aboutMain} ref={aboutRef}>
        {result}
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page: any) => <Layout>{page}</Layout>;
