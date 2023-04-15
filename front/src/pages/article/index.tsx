import Head from "next/head";
import ArticleCard from "../../components/article/articleCard";
import Layout from "../../layout";
import { NextPageWithLayout } from "../../models/interfaces";
import style from "src/styles/component/_article.module.scss";

const Article: NextPageWithLayout = () => {
  const result = data.map((article, index) => {
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
