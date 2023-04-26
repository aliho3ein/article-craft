import { useRouter } from "next/router";
import { FC } from "react";
import { article } from "../../models/interfaces";
import style from "./../../styles/component/_article.module.scss";

interface articleType {
  value: article;
}

const ArtCmsCard: FC<articleType> = ({ value }) => {
  const router = useRouter();

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
    </div>
  );
};

export default ArtCmsCard;
