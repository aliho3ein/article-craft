import { FC, useContext, useEffect, useRef, useState } from "react";
import { faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/** */
import style from "src/styles/_navbar.module.scss";
import Link from "next/link";
import MainContext from "../../context/mainContext";

const Bar: FC = () => {
  const circleRef = useRef<HTMLHeadingElement>(null);
  const { state } = useContext(MainContext);

  const [mode, setMode] = useState(true);

  useEffect(() => {
    // switchMode();
  }, []);

  /** DarkMode switch key */
  const switchMode = () => {
    const root = document.documentElement;
    if (mode) {
      root.style.setProperty("--bg-color", "#444");
      root.style.setProperty("--primary-color", "#eee");
      root.style.setProperty("--secondary-color", "#aaaa");
      root.style.setProperty("--third-color", "#777");
      root.style.setProperty("--quaternary-color", "#555");
      root.style.setProperty(
        "--head-bg",
        "url('https://firebasestorage.googleapis.com/v0/b/online-shop-87fb7.appspot.com/o/category%2F1681729456245?alt=media&token=d24fa12f-e63a-413a-9a9e-7c882aad574d')"
      );
      root.style.setProperty(
        "--contact-bg",
        "url('https://firebasestorage.googleapis.com/v0/b/online-shop-87fb7.appspot.com/o/category%2F1681729470016?alt=media&token=e4d70854-d6d6-44fd-9984-5173ba9551ce')"
      );
    } else {
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--primary-color", "#333");
      root.style.setProperty("--secondary-color", "#999");
      root.style.setProperty("--third-color", "#ccc");
      root.style.setProperty("--quaternary-color", "#eee");
      root.style.setProperty(
        "--head-bg",
        `url("https://firebasestorage.googleapis.com/v0/b/online-shop-87fb7.appspot.com/o/category%2F1681729432962?alt=media&token=25dd7283-7cc5-4df6-b026-25959df3f2b7")`
      );
      root.style.setProperty(
        "--contact-bg",
        "url('https://firebasestorage.googleapis.com/v0/b/online-shop-87fb7.appspot.com/o/category%2F1681729410554?alt=media&token=a9cee686-12e9-42d5-87f6-8445614a1f21')"
      );
    }
    setMode(!mode);

    circleRef.current?.classList.toggle(`${style.darkModeActive}`);
  };

  return (
    <nav id={style.nav}>
      <ul>
        <Link href="/">
          <li>aboutMe</li>
        </Link>
        <Link href="/article">
          <li>myArticle</li>
        </Link>
        <Link href="/shop">
          <li>shopCenter</li>
        </Link>
        <Link href="/work">
          <li>myWork</li>
        </Link>

        <Link href="/contact">
          <li>contactMe</li>
        </Link>
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
      {state!.token ? (
        <Link href="/cms" className={style.portalBtn}>
          <span>managePortal</span>
        </Link>
      ) : (
        <Link href="/cms" className={style.loginBtn}>
          <FontAwesomeIcon icon={faUser} className={style.icon} />
          <span>Login</span>
        </Link>
      )}
    </nav>
  );
};

export default Bar;
