import { useRouter } from "next/router";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
/** */
import style from "src/styles/component/_article.module.scss";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faNewspaper,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import SuggestCard from "../../components/article/suggestCard";
import { sortByView } from "../../models/sortList";

/** */
const ArticleID: NextPageWithLayout = () => {
  const { id } = useRouter().query;

  const article = data.find((article) => article.id === id);
  const user = users.find((user) => user.id === article?.userId);
  /** */

  const hashTg = article?.hashTag.split(",");
  const suggest = data.filter((data) => {
    for (const tag of hashTg!) {
      return data.hashTag.includes(tag) && data.id !== id;
    }
  });

  const suggestList = suggest
    .slice(0, 5)
    .map((tag, index) => <SuggestCard key={index} value={tag} />);

  const viewList = data
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

const data = [
  {
    id: "1",
    title: "10 important library for Node",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/4/7/tBHi0TbgCMWaGuLDHCZGs6Dxc9jB3xDewa7aTUI8.png",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: "react",
  },
  {
    id: "2",
    title: "Künstliche AI",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/4/8/k1LbkNBMAVTxaiH4Ls4AsZlVzUPdlwXwMPEROa32.jpg",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: "react , html",
  },
  {
    id: "3",
    title: "top 10 Programming language",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/4/4/VQTauAFStNH9LBkk26j7jvWMhi4ZfmLier1I2Iq2.png",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: "html , next ",
  },
  {
    id: "4",
    title: "React exercise",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/3/27/L4lawyVLppW7GgL7z4F0mgl0pMLkKrrqbAyPeN4A.png",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: "javascript , next ",
  },
  {
    id: "5",
    title: "Gatsby Vs Next",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/2/28/81glvhyFVOFL9c0ybkY8XQGMnlENCXIyPNEI2gmH.png",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: "react , html",
  },
  {
    id: "6",
    title: "10 important library for Node",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/4/7/tBHi0TbgCMWaGuLDHCZGs6Dxc9jB3xDewa7aTUI8.png",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: "html , css ",
  },
  {
    id: "7",
    title: "10 important library for Node5 fdsds",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/4/7/tBHi0TbgCMWaGuLDHCZGs6Dxc9jB3xDewa7aTUI8.png",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: " javascript , html",
  },
  {
    id: "8",
    title: "Künstliche AI",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/4/8/k1LbkNBMAVTxaiH4Ls4AsZlVzUPdlwXwMPEROa32.jpg",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: "react , html ",
  },
  {
    id: "9",
    title: "Best language in 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit sed reiciendis? Magnam atque nam, est earum harum mollitia et, magni aspernatur esse incidunt tempore suscipit soluta sit quasi laborum!",
    img: "https://static.roocket.ir/images/cover/2023/4/4/VQTauAFStNH9LBkk26j7jvWMhi4ZfmLier1I2Iq2.png",
    view: 45,
    like: 12,
    date: "15.04.2022",
    userId: "1",
    hashTag: "javascript  , node",
  },
];

const users = [
  {
    id: "1",
    name: "ali",
    status: "some lorem text etc",
    bio: `Hi guys, my name is Ali and I'm a Web Developer. I write articles about what I love and what interests me, the truth is that it's not easy to be motivated when your job is boring. You are tired after work, you go home, you eat with your family, do some stuff on the internet like checking Facebook or playing games but nothing really matters except for work. There are many articles like this but I want to make mine better than others:)`,
    img: "https://as1.ftcdn.net/v2/jpg/03/05/25/28/1000_F_305252832_jZQnjv3kZd0HfMzUB2BaalhTiZzQo7cN.jpg",
  },
  {
    id: "2",
    name: "abas",
    status: "I'm a Web Developer. I write articles ",
    bio: `Hi. I'm abas, and I'm a Web Developer who loves to code in my free time. I started learning how to code after dropping out of college because I was inspired by all the cool projects the students were working on. When others were sleeping, I was up late browsing reddit and discovering new sites where I could learn new skills. Eventually, due to my hard work, my dream of becoming a Web Developer came true! Today, I spend most of my time helping others make the most out of their skills.`,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHrcgZGVVA--k9WZociwHLjCH4wI_oYkMkw&usqp=CAU",
  },
];
