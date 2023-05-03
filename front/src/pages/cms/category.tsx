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
import {
  getArticlesFromDB,
  getUsersFromDB,
  getWorksFromDB,
} from "../../actions/apiRequest";

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
        getArticles();
        break;

      case "work":
        getWorks();
        break;

      case "user":
        //users
        getUsers();
        break;
    }
  };

  const getArticles = async () => {
    state!.article.length <= 0
      ? await getArticlesFromDB().then((res) => {
          dispatch!({
            type: "GET_DATA",
            payload: { category: "article", data: res },
          });
          setList(
            res.map((item: article, index: number) => {
              return <ArtCmsCard key={index} value={item} />;
            })
          );
        })
      : setList(
          state!.article.map((item: article, index: number) => {
            return <ArtCmsCard key={index} value={item} />;
          })
        );
  };

  const getWorks = async () => {
    console.log(state?.work);

    state!.work.length <= 1
      ? await getWorksFromDB().then((res) => {
          dispatch!({
            type: "GET_DATA",
            payload: { category: "work", data: res },
          });
          setList(
            res.map((item: work, index: number) => {
              return <WorkCmsCard key={index} value={item} />;
            })
          );
        })
      : setList(
          state!.work.map((item: work, index: number) => {
            return <WorkCmsCard key={index} value={item} />;
          })
        );
  };

  const getUsers = async () => {
    if (state?.user.length! <= 7) {
      getUsersFromDB().then((res) => {
        console.log("get data");

        dispatch!({
          type: "GET_DATA",
          payload: { category: "user", data: res },
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
