import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import WorkCard from "../components/work/workCard";
import MainContext from "../context/mainContext";
import Layout from "../layout";
import { NextPageWithLayout, work } from "../models/interfaces";
import style from "src/styles/component/_work.module.scss";
import { getWorksFromDB } from "../actions/apiRequest";

const Work: NextPageWithLayout = () => {
  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    getWorks();
    console.log("fetch in workPage");
  }, []);

  const [workList, setList] = useState<any>([]);

  const getWorks = async () => {
    state!.work.length <= 1
      ? await getWorksFromDB().then((res: work[]) => {
          dispatch!({
            type: "GET_DATA",
            payload: { category: "work", data: res },
          });
          setList(
            res.map((item, index) => (
              <WorkCard value={item} index={index} key={index} />
            ))
          );
        })
      : setList(
          state!.work.map((item, index) => (
            <WorkCard value={item} index={index} key={index} />
          ))
        );
  };

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
