import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
import { useContext, useEffect } from "react";
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
import Skill from "../../components/skillCard";
import { GetServerSideProps } from "next";
import instance from "../../api/instance";
import { increaseLike } from "../../actions/apiRequest";

/** */
const ArticleID: NextPageWithLayout<any> = ({ newArticle }) => {
  const { state, dispatch } = useContext(MainContext);

  /** get article's ID */
  const { id } = useRouter().query;

  const user = {
    id: "1",
    name: "ali",
    status: "some lorem text etc",
    skills:
      "html,css,sass,tailwind,bootstrap,javascript,react,next,node,typescript,mongo,express,jquery",
    bio: `Hi guys, my name is Ali and I'm a Web Developer. I write articles about what I love and what interests me, the truth is that it's not easy to be motivated when your job is boring. You are tired after work, you go home, you eat with your family, do some stuff on the internet like checking Facebook or playing games but nothing really matters except for work. There are many articles like this but I want to make mine better than others:)`,
    img: "https://as1.ftcdn.net/v2/jpg/03/05/25/28/1000_F_305252832_jZQnjv3kZd0HfMzUB2BaalhTiZzQo7cN.jpg",
  };

  /** get related articles */
  const hashTg = newArticle?.hashTag.split(",");
  const suggest = state!.article.filter((data) => {
    for (const tag of hashTg!) {
      return data.hashTag.includes(tag) && data._id !== id;
    }
  });
  const suggestList = suggest
    .slice(0, 5)
    .map((tag, index) => <SuggestCard key={index} value={tag} />);

  /** get most views articles */
  const viewList = state?.article
    .sort(sortByView)
    .slice(0, 5)
    .map((tag, index) => <SuggestCard key={index} value={tag} />);

  /** tags */
  const tags = newArticle!.hashTag
    .split(",")
    .map((tag: string, index: number) => <Skill value={tag} key={index} />);

  return (
    <>
      <Head>
        <title>{newArticle?.title}</title>
      </Head>

      <main className={style.singleArticle}>
        <section className={style.mainSide}>
          <div
            className={style.head}
            style={{ ["--article-img" as string]: `url(${newArticle?.img})` }}
          ></div>
          <h2>{newArticle?.title}</h2>
          <p>{newArticle?.desc}</p>
          <div className={style.tags}>Tags : {tags}</div>
          <div className={style.info}>
            <span>{newArticle?.date}</span>
            <span>
              {newArticle?.view}
              <FontAwesomeIcon className={style.icon} icon={faUser} />
            </span>
            <span
              onClick={() => {
                increaseLike(newArticle),
                  dispatch!({ type: "ADD_LIKE", payload: { data: id } });
              }}
            >
              {newArticle?.like}
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;

  const newArticle = await instance.get(`/article/${id}`).then((res) => {
    return res.data;
  });

  return {
    props: {
      newArticle,
    },
  };
};
