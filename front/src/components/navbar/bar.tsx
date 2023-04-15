import { FC, useRef } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/** */
import style from "src/styles/_navbar.module.scss";
/** */
import Nav from "./nav";
import Link from "next/link";

const Bar: FC = () => {
  const circleRef = useRef<HTMLHeadingElement>(null);

  /** DarkMode switch key */
  const switchMode = () => {
    circleRef.current?.classList.toggle(`${style.darkModeActive}`);
  };

  return (
    <nav id={style.nav}>
      <ul>
        <li>
          <Link href="/">aboutMe</Link>
        </li>
        <li>
          <Link href="/article">myArticle</Link>
        </li>
        <li>
          <Link href="/shop">shopCenter </Link>
        </li>
        <li>
          <Link href="/work">myWork</Link>
        </li>

        <li>
          <Link href="/contact">contactMe</Link>
        </li>
      </ul>
      <div id={style.logo}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/online-shop-87fb7.appspot.com/o/category%2F1681482983743?alt=media&token=6336a752-ab43-4acd-a201-6522a39bc5a6"
          alt="logo"
        />
      </div>
      <div id={style.navMode}>
        {/* <FontAwesomeIcon icon={faSun} /> */}
        <FontAwesomeIcon icon={faMoon} />
        <div id={style.switch} onClick={switchMode}>
          <div id={style.switchCircle} ref={circleRef}></div>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
