import { useRouter } from "next/router";
import { FC } from "react";
import style from "src/styles/component/_article.module.scss";
import { article } from "../../models/interfaces";

interface articleType {
  value: article;
}

const SuggestCard: FC<articleType> = ({ value }) => {
  const router = useRouter();
  const redirectArt = (id: string) => {
    router.push(`/article/${id}`);
  };

  return (
    <div className={style.artPreview} onClick={() => redirectArt(value?._id)}>
      <h3>{value?.title}</h3>
      <p>
        <span>{value.date}</span>
      </p>
    </div>
  );
};

export default SuggestCard;
