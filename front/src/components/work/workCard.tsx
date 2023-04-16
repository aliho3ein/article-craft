import { faLink, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect } from "react";
import style from "src/styles/component/_work.module.scss";
import { workType } from "../../models/interfaces";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkCard: FC<workType> = ({ value, index }) => {
  useEffect(() => {
    AOS.init();
  }, []);

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
          <span>
            {value.view}
            <FontAwesomeIcon icon={faUser} className={style.icon} />
          </span>
          <a href={value.link} title={value.title} target="_blank">
            <FontAwesomeIcon icon={faLink} className={style.icon} />
          </a>
          <span>
            <FontAwesomeIcon icon={faThumbsUp} className={style.icon} />
            {value.like}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
