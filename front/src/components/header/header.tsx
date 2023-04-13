import { FC, useEffect, useRef, useState } from "react";
import style from "src/styles/_header.module.scss";
/** fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header: FC = () => {
  const headRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [shadow, setShadow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    /** scroll controller */
    addEventListener("scroll", (e) => {
      const top = Math.floor(window.pageYOffset / 35);
      titleRef.current &&
        (titleRef.current.style.transform = `translateY(${top}px)`);
    });
  }, []);

  /** mouseMovement  */
  const handelMouse = (e: any) => {
    const w = headRef.current!.offsetWidth;
    const h = headRef.current!.offsetHeight;
    let { clientX: x, clientY: y } = e;
    const xWalk = Math.round((x / w) * 15) - 5;
    const yWalk = Math.round((y / h) * 15) - 5;
    setShadow({ x: xWalk, y: yWalk });
  };

  return (
    <header id={style.header} onMouseMove={handelMouse} ref={headRef}>
      {/* head Title */}
      <h1
        ref={titleRef}
        id={style.headTitle}
        style={{
          textShadow: `
      ${shadow.x * -1}px ${shadow.y}px 7px rgba(255, 0, 0, 0.35),
      ${shadow.y}px ${shadow.x * -1}px 8px rgba(8, 240, 6, 0.3),
      ${shadow.y * -1}px ${shadow.x}px 5px rgba(250, 250, 00, 0.3),
      ${shadow.x}px ${shadow.y * -1}px 6px rgba(1, 21, 231,0.4)
      `,
        }}
      >
        ArticleCraft
      </h1>

      {/* head social */}
      <div id={style.headSocial}>
        <a
          href="https://github.com/aliho3ein"
          target="_blank"
          title="Github"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>

        <a
          href="https://www.instagram.com/aliho3.ein/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.linkedin.com/in/aliho3ein/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </header>
  );
};

export default Header;
