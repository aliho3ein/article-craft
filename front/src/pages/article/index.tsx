import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../context/mainContext";
import ArticleCard from "../../components/article/articleCard";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
import style from "src/styles/component/_article.module.scss";

const Article: NextPageWithLayout<any> = () => {
  const { state, dispatch } = useContext(MainContext);

  const index = state!.pageSize * state!.pageIndex;
  const totalItems = state!.article.length;

  useEffect(() => {
    dispatch!({ type: "SORT_ARTICLE", payload: {} });
    console.log("effect");
  }, [state!.pageIndex]);

  /** */
  const result = state!.article
    .slice(index - state!.pageSize, index)
    .map((article, index) => {
      return <ArticleCard key={index} value={article} />;
    });

  /** Pagination */
  const paginationHandler = (num: number) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    state!.pageIndex >= 1 - num &&
      state!.pageIndex <= Math.ceil(totalItems / state!.pageSize) - num &&
      dispatch!({
        type: "PAGE_INDEX",
        payload: { data: state!.pageIndex + num },
      });
  };

  return (
    <>
      <Head>
        <title>myArticle</title>
      </Head>
      <main className={style.articleMain}>
        {result}
        <div className={style.pagination}>
          <span
            className={`${style.previousPage} ${
              state!.pageIndex <= 1 && style.deActive
            }`}
            onClick={() => paginationHandler(-1)}
          >
            &#8882; Previous
          </span>
          <span
            className={`${style.nextPage} ${
              state!.pageIndex >= Math.ceil(totalItems / state!.pageSize) &&
              style.deActive
            }`}
            onClick={() => paginationHandler(1)}
          >
            Next &#8883;
          </span>
        </div>
      </main>
    </>
  );
};

export default Article;

Article.getLayout = (page) => <Layout>{page}</Layout>;
