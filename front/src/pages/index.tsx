import Head from "next/head";
import { NextPageWithLayout } from "../models/interfaces";
import Layout from "../layout";
/** */
import style from "src/styles/component/_about.module.scss";
/** component */
import Header from "../components/header/header";
import { useEffect, useRef, useState } from "react";
import AboutText from "../components/about/aboutText";
import { useContext } from "react";
import MainContext from "../context/mainContext";
import instance from "../api/instance";

/** ABOUT/HOME **/
const Home: NextPageWithLayout = () => {
  const { dispatch, state } = useContext(MainContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    instance.get("/user").then((res) => {
      dispatch!({
        type: "GET_DATA",
        payload: { category: "user", data: res.data },
      });
      setUsers(res.data);
    });
  };

  const aboutRef = useRef<HTMLHeadingElement>(null);

  const result = users.map((user, index) => (
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
