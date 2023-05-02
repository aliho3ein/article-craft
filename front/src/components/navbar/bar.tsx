import { FC, useContext, useEffect, useRef, useState } from "react";
import { faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/** */
import style from "src/styles/_navbar.module.scss";
import Link from "next/link";
import MainContext from "../../context/mainContext";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../actions/localStorage";

const Bar: FC = () => {
  const navRef = useRef<HTMLUListElement>(null);
  const circleRef = useRef<HTMLHeadingElement>(null);
  const { state, dispatch } = useContext(MainContext);

  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const DarkMode = getLocalStorage("darkMode");
    switchMode(DarkMode);
  }, []);

  /** LogoutHandler */
  const logOutUser = () => {
    dispatch!({ type: "LOGIN_USER", payload: { data: "" } });
    removeLocalStorage("token");
  };

  /** DarkMode switch key */
  const switchMode = (mode: boolean) => {
    const root = document.documentElement;
    if (mode) {
      setLocalStorage("darkMode", true);
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
      setTheme(false);
    } else {
      removeLocalStorage("darkMode");
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
      setTheme(true);
    }
    circleRef.current?.classList.toggle(`${style.darkModeActive}`);
  };

  /** activeNav */
  const activeLink = (e: any) => {
    navRef.current!.querySelector(".navActive")?.classList.remove("navActive");
    e.currentTarget.children[0].classList.add("navActive");
  };

  return (
    <nav id={style.nav} ref={navRef}>
      <ul>
        <Link href="/" onClick={activeLink}>
          <li>aboutMe</li>
        </Link>
        <Link href="/article" onClick={activeLink}>
          <li>myArticle</li>
        </Link>
        <Link href="/shop" onClick={activeLink}>
          <li>shopCenter</li>
        </Link>
        <Link href="/work" onClick={activeLink}>
          <li>myWork</li>
        </Link>

        <Link href="/contact" onClick={activeLink}>
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
        <div id={style.switch} onClick={() => switchMode(theme)}>
          <div
            id={style.switchCircle}
            className={!theme ? style.darkModeActive : ""}
            ref={circleRef}
          ></div>
        </div>
      </div>
      {state!.token ? (
        <>
          <Link href="/cms" onClick={activeLink} className={style.portalBtn}>
            <span>managePortal</span>
          </Link>
          <span className={style.logoutBtn} onClick={logOutUser}>
            logOut
          </span>
        </>
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
