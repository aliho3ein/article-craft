import { FC } from "react";
/** */
import style from "src/styles/_footer.module.scss";

const Footer: FC = () => {
  return (
    <footer id={style.footer}>
      <span>copyright &copy; ArticleCraft all rights reserved</span>
      <span>powered by aliho3ein</span>
    </footer>
  );
};

export default Footer;
