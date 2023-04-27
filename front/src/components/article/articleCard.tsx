import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC, useContext, useEffect } from "react";
import style from "src/styles/component/_article.module.scss";
import { article } from "../../models/interfaces";
import AOS from "aos";
import "aos/dist/aos.css";
import { increaseLike, increaseView } from "../../actions/apiRequest";
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
    increaseView(value);
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

        <span
          title="Likes"
          className={style.like}
          onClick={() => {
            increaseLike(value),
              dispatch!({ type: "ADD_LIKE", payload: { data: value._id } });
          }}
        >
          <FontAwesomeIcon className={style.icon} icon={faHeart} /> {value.like}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
