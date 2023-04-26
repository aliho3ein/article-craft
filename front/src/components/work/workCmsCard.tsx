import { FC } from "react";
import { work } from "../../models/interfaces";
import style from "./../../styles/component/_article.module.scss";

interface workType {
  value: work;
}

const WorkCmsCard: FC<workType> = ({ value }) => {
  return (
    <div className={style.artCard}>
      <div
        className={style.cardHeader}
        style={{ ["--bgImg" as string]: `url(${value.img})` }}
      ></div>
      <div>
        <h2>{value.title}</h2>
        {value.desc.slice(0, 270)} ...
      </div>
    </div>
  );
};

export default WorkCmsCard;
