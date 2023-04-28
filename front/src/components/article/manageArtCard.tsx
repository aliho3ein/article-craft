import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { deleteDataFromDB } from "../../actions/apiRequest";
import MainContext from "../../context/mainContext";
import { article } from "../../models/interfaces";
import style from "./../../styles/component/_article.module.scss";
import Swal from "sweetalert2";
import { alertMassage } from "../../actions/alerts";

interface articleType {
  value: article;
}

const ArtCmsCard: FC<articleType> = ({ value }) => {
  const { dispatch } = useContext(MainContext);
  const router = useRouter();

  const deleteItem = async (e: any) => {
    e.stopPropagation();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#333",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDataFromDB("article", value._id);
        dispatch!({
          type: "DELETE_DATA",
          payload: { category: "article", data: value._id },
        });
        alertMassage("Your file has been deleted");
      }
    });
  };

  return (
    <div
      className={style.artCard}
      onClick={() => router.push(`/cms/forms/article?ID=${value._id}`)}
    >
      <div
        className={style.cardHeader}
        style={{ ["--bgImg" as string]: `url(${value.img})` }}
      ></div>
      <div>
        <h2>{value.title}</h2>
        {value.desc.slice(0, 270)} ...
      </div>
      <h2 onClick={deleteItem}>Delete</h2>
    </div>
  );
};

export default ArtCmsCard;
