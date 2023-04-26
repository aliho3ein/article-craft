import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../context/mainContext";
import ArticleCard from "../../components/article/articleCard";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
import style from "src/styles/component/_article.module.scss";

const Article: NextPageWithLayout<any> = () => {
  const { state, dispatch } = useContext(MainContext);

  /** */
  const result = state!.article.map((article, index) => {
    return <ArticleCard key={index} value={article} />;
  });

  return (
    <>
      <Head>
        <title>myArticle</title>
      </Head>
      <main className={style.articleMain}>
        {result}
        <div className={style.pagination}>
          <span className={style.previousPage}>&#8882; Previous</span>
          <span className={style.nextPage}>Next &#8883;</span>
        </div>
      </main>
    </>
  );
};

export default Article;

Article.getLayout = (page) => <Layout>{page}</Layout>;
