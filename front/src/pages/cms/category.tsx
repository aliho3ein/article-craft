import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import style from "./../../styles/cms/_portal.module.scss";
import UserCmsCard from "../../components/about/UserCmsCard";
import ArtCmsCard from "../../components/article/manageArtCard";
import WorkCmsCard from "../../components/work/workCmsCard";
import Layout from "../../layout";
import {
  article,
  work,
  NextPageWithLayout,
  user,
} from "../../models/interfaces";
import MainContext from "../../context/mainContext";
import { getUsersFromDB } from "../../actions/apiRequest";

/** */
const Categories: NextPageWithLayout<any> = () => {
  const { key } = useRouter().query;
  const { state, dispatch } = useContext(MainContext);

  const [list, setList] = useState<any>();

  useEffect(() => {
    createList();
  }, [key]);

  const createList = () => {
    switch (key) {
      case "article":
        setList(
          state!.article.map((item: article, index: number) => {
            return <ArtCmsCard key={index} value={item} />;
          })
        );
        break;

      case "work":
        setList(
          state?.work.map((item: work, index: number) => {
            return <WorkCmsCard key={index} value={item} />;
          })
        );
        break;

      case "user":
        //users
        getUsers();
        break;
    }
  };

  const getUsers = () => {
    if (state?.user.length! <= 7) {
      getUsersFromDB().then((res) => {
        console.log("get data");

        dispatch!({
          type: "GET_USERS",
          payload: { data: res },
        });

        setList(
          res.map((item: user, index: number) => {
            return <UserCmsCard key={index} value={item} />;
          })
        );
      });
    }
  };

  return (
    <>
      <Head>
        <title>{key}Area</title>
      </Head>

      <main className={style.categoryMain}>{list}</main>
    </>
  );
};
export default Categories;

Categories.getLayout = (page) => <Layout>{page}</Layout>;
