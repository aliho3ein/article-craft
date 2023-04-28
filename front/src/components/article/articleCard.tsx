import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC, useContext, useEffect } from "react";
import style from "src/styles/component/_article.module.scss";
import { article } from "../../models/interfaces";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateLikeAndView } from "../../actions/apiRequest";
import MainContext from "../../context/mainContext";

export interface articleType {
  value: article;
}

/** */
const ArticleCard: FC<articleType> = ({ value }) => {
  const { dispatch } = useContext(MainContext);

  useEffect(() => {
    AOS.init();
  }, []);

  const updateView = () => {
    updateLikeAndView("article", "view", value);
  };

  const updateLike = () => {
    updateLikeAndView("article", "like", value);
    dispatch!({
      type: "ADD_LIKE",
      payload: { category: "article", data: value },
    });
  };

  return (
    <div className={style.articleCard} data-aos="fade-up">
      <div
        className={style.articleImg}
        style={{ ["--bgImg" as string]: `url(${value.img})` }}
      >
        <span className={style.date} title="modify Date">
          {value.createdAt.slice(0, 10)}
        </span>
      </div>
      <div className={style.articlePreInfo}>
        <h2> {value.title.slice(0, 30)} </h2>
        <p>
          {value.desc.slice(0, 75)} ...{" "}
          <Link
            href={`/article/${value._id}`}
            title={`${value.desc.slice(75, 150)} ...`}
            onClick={updateView}
          >
            readMore
          </Link>
        </p>
      </div>
      <div className={style.articleDetail}>
        <span title="Views">
          {value.view} <FontAwesomeIcon className={style.icon} icon={faUser} />
        </span>

        <span title="Likes" className={style.like} onClick={updateLike}>
          <FontAwesomeIcon className={style.icon} icon={faHeart} /> {value.like}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
