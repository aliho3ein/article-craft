import { FC } from "react";
import { user } from "../../models/interfaces";
import style from "./../../styles/component/_article.module.scss";

interface userType {
  value: user;
}

const UserCmsCard: FC<userType> = ({ value }) => {
  return (
    <div className={style.artCard}>
      <div
        className={style.cardHeader}
        style={{ ["--bgImg" as string]: `url(${value.img})` }}
      ></div>
      <div>
        <h2>{value.name}</h2>
        {value.bio.slice(0, 270)} ...
      </div>
    </div>
  );
};

export default UserCmsCard;
