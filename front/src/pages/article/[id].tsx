import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
import { useContext } from "react";
import MainContext from "../../context/mainContext";
/** */
import style from "src/styles/component/_article.module.scss";
import SuggestCard from "../../components/article/suggestCard";
import { sortByView } from "../../models/sortList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faNewspaper,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

/** */
const ArticleID: NextPageWithLayout = () => {
  const { articles, users } = useContext(MainContext);

  /** get article's ID */
  const { id } = useRouter().query;

  const article = articles.find((article) => article.id === id);
  const user = users.find((user) => user.id === article?.userId);

  /** get related articles */
  const hashTg = article?.hashTag.split(",");
  const suggest = articles.filter((data) => {
    for (const tag of hashTg!) {
      return data.hashTag.includes(tag) && data.id !== id;
    }
  });
  const suggestList = suggest
    .slice(0, 5)
    .map((tag, index) => <SuggestCard key={index} value={tag} />);

  /** get most views articles */
  const viewList = articles
    .sort(sortByView)
    .slice(0, 5)
    .map((tag, index) => <SuggestCard key={index} value={tag} />);

  return (
    <>
      <Head>
        <title>{article?.title}</title>
      </Head>

      <main className={style.singleArticle}>
        <section className={style.mainSide}>
          <div
            className={style.head}
            style={{ ["--article-img" as string]: `url(${article?.img})` }}
          ></div>
          <h2>{article?.title}</h2>
          <p>{article?.desc}</p>
          <div className={style.info}>
            <span>{article?.date}</span>
            <span>
              {article?.view}
              <FontAwesomeIcon className={style.icon} icon={faUser} />
            </span>
            <span>
              {article?.like}
              <FontAwesomeIcon className={style.icon} icon={faHeart} />
            </span>
          </div>
        </section>

        <section className={style.aSide}>
          <div className={style.userInfo}>
            <div
              className={style.userImg}
              style={{ ["--userImg" as string]: `url(${user?.img})` }}
            ></div>
            <p>
              <span>{user?.name}</span>
              <br />
              {user?.status}
            </p>
          </div>

          <div className={style.suggestArt}>
            <h2>
              <FontAwesomeIcon icon={faNewspaper} className={style.icon} />
              Related articles
            </h2>
            <span>These articles may be of interest to you</span>
            {suggestList}
          </div>

          <div className={style.suggestArt}>
            <h2>
              <FontAwesomeIcon icon={faStar} className={style.icon} />
              Top articles
            </h2>
            <span>These articles with the most views</span>
            {viewList}
          </div>
        </section>
      </main>
    </>
  );
};

export default ArticleID;

ArticleID.getLayout = (page) => <Layout>{page}</Layout>;
