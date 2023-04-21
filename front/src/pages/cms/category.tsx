import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import instance from "../../api/instance";
import ArtCmsCard from "../../components/article/manageArtCard";
import Layout from "../../layout";
import { article, NextPageWithLayout } from "../../models/interfaces";
import style from "./../../styles/cms/_portal.module.scss";

const Categories: NextPageWithLayout<any> = () => {
  const { key } = useRouter().query;

  const [list, setList] = useState();

  useEffect(() => {
    instance.get(`/${key}`).then((res) => createList(res.data));
  }, []);

  const createList = (data: any) => {
    switch (key) {
      case "article":
        setList(
          data.map((item: article, index: number) => {
            return <ArtCmsCard key={index} value={item} />;
          })
        );
        break;

      default:
        break;
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await instance.get(`/article`);

  return {
    props: {
      getData: res.data,
    },
  };
};
