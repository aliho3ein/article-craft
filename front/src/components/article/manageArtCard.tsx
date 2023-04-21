import { FC } from "react";
import { articleType } from "../../models/interfaces";
import style from "./../../styles/component/_article.module.scss";

const ArtCmsCard: FC<articleType> = ({ value }) => {
  return (
    <div className={style.articleCard}>
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

export default ArtCmsCard;
