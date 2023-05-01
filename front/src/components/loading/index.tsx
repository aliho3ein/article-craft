import { FC } from "react";
import style from "./../../styles/component/_loading.module.scss";
import LoadingSpinner from "./spinner";

const LoadingComponent: FC = () => {
  return (
    <div className={style.loadingMain}>
      <LoadingSpinner />
    </div>
  );
};

export default LoadingComponent;
