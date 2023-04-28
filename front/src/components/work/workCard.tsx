import { faLink, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext, useEffect } from "react";
import style from "src/styles/component/_work.module.scss";
import { workType } from "../../models/interfaces";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateLikeAndView } from "../../actions/apiRequest";
import MainContext from "../../context/mainContext";

const WorkCard: FC<workType> = ({ value, index }) => {
  const { dispatch } = useContext(MainContext);

  useEffect(() => {
    AOS.init();
  }, []);

  const addLike = () => {
    updateLikeAndView("work", "like", value);
    dispatch!({
      type: "ADD_LIKE",
      payload: { category: "work", data: value },
    });
  };

  return (
    <div
      data-aos={index % 2 == 0 ? "fade-left" : "fade-right"}
      className={style.workCard}
      style={(index as number) % 2 == 0 ? { flexDirection: "row-reverse" } : {}}
    >
      <div
        className={style.cardImg}
        style={{ ["--cardImg" as string]: `url(${value?.img})` }}
      ></div>
      <div className={style.cardInfo}>
        <h2>{value?.title}</h2>
        <p>{value?.desc}</p>

        <div className={style.cardDetail}>
          <span title="View from here">
            {value.view}
            <FontAwesomeIcon icon={faUser} className={style.icon} />
          </span>
          <a
            href={value.link}
            title={`go to ${value.title}`}
            target="_blank"
            onClick={() => {
              updateLikeAndView("work", "view", value);
            }}
          >
            <FontAwesomeIcon icon={faLink} className={style.icon} />
          </a>
          <span title={`Do you like ${value.title} ?`} onClick={addLike}>
            <FontAwesomeIcon icon={faThumbsUp} className={style.icon} />
            {value.like}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
