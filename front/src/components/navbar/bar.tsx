import { FC, useRef } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/** */
import style from "src/styles/_navbar.module.scss";
/** */
import Nav from "./nav";

const Bar: FC = () => {
  const circleRef = useRef<HTMLHeadingElement>(null);

  /** DarkMode switch key */
  const switchMode = () => {
    circleRef.current?.classList.toggle(`${style.darkModeActive}`);
  };

  return (
    <nav id={style.nav}>
      <ul>
        <li className={style.navActive}>aboutMe</li>
        <li>myWork</li>
        <li>shopCenter</li>
        <li>contactMe</li>
      </ul>
      <div id={style.logo}>
        <img
          src="https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356"
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
