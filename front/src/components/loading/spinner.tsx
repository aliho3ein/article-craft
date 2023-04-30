import { FC } from "react";
import style from "./../../styles/component/_loading.module.scss";

const LoadingSpinner: FC = () => {
  return (
    <div className={style.book}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
