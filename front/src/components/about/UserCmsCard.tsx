import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { deleteDataFromDB } from "../../actions/apiRequest";
import MainContext from "../../context/mainContext";
import { user } from "../../models/interfaces";
import style from "./../../styles/component/_article.module.scss";

interface userType {
  value: user;
}

const UserCmsCard: FC<userType> = ({ value }) => {
  const router = useRouter();
  const { dispatch } = useContext(MainContext);

  const deleteItem = async (e: any) => {
    e.stopPropagation();
    deleteDataFromDB("user", value._id);
    dispatch!({
      type: "DELETE_DATA",
      payload: { category: "user", data: value._id },
    });
  };

  return (
    <div
      className={style.artCard}
      onClick={() => router.push(`/cms/forms/user?ID=${value._id}`)}
    >
      <div
        className={style.cardHeader}
        style={{ ["--bgImg" as string]: `url(${value.img})` }}
      ></div>
      <div>
        <h2>{value.name}</h2>
        {value.bio.slice(0, 270)} ...
      </div>
      <h2 onClick={deleteItem}>delete</h2>
    </div>
  );
};

export default UserCmsCard;
