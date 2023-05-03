import Head from "next/head";
import { NextPageWithLayout } from "../models/interfaces";
import Layout from "../layout";
import style from "src/styles/component/_about.module.scss";
import Header from "../components/header/header";
import { useEffect, useRef, useState } from "react";
import AboutText from "../components/about/aboutText";
import { useContext } from "react";
import MainContext from "../context/mainContext";
import { getUsersInfoFromDB } from "../actions/apiRequest";
import LoadingComponent from "../components/loading";

/** ABOUT/HOME **/
const Home: NextPageWithLayout = () => {
  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    console.log("request to server from HomePage");
    getUsersInfoFromDB().then((res) => {
      dispatch!({ type: "GET_DATA", payload: { category: "user", data: res } });
    });
  }, [!state?.isLoading]);

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
      {state!.isLoading ? (
        <LoadingComponent />
      ) : (
        <main className={style.aboutMain} ref={aboutRef}>
          {result}
        </main>
      )}
    </>
  );
};

export default Home;

Home.getLayout = (page: any) => <Layout>{page}</Layout>;
