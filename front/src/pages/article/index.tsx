import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../context/mainContext";
import ArticleCard from "../../components/article/articleCard";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
import style from "src/styles/component/_article.module.scss";
import { getArticlesFromDB } from "../../actions/apiRequest";
import LoadingComponent from "../../components/loading";

const Article: NextPageWithLayout<any> = () => {
  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    console.log("request to server from Article");
    getArticles();
  }, [state!.isLoading]);

  const getArticles = async () => {
    state!.article.length <= 0 &&
      (await getArticlesFromDB().then((res) => {
        dispatch!({
          type: "GET_DATA",
          payload: { category: "article", data: res },
        });
      }));
  };

  const index = state!.pageSize * state!.pageIndex;
  const totalItems = state!.article.length;

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
      {state!.isLoading ? (
        <LoadingComponent />
      ) : (
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
      )}
    </>
  );
};

export default Article;

Article.getLayout = (page) => <Layout>{page}</Layout>;
