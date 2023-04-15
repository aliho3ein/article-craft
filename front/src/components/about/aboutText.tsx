import { FC, useEffect, useRef } from "react";
import style from "src/styles/component/_about.module.scss";

const AboutText: FC<any> = ({ data }) => {
  const paragraphRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    /** start typing if scroll till paragraph */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //   typeText(data[Math.floor(Math.random() * data.length)]);
          typeText(data.bio);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(paragraphRef.current!);
    return () => {
      observer.disconnect();
    };
    typeText(data.bio);
  }, []);

  const typeText = (txt: any) => {
    let num = 0;
    const interval = setInterval(() => {
      if (num <= txt.length - 1) {
        /** if user go to another page got error , then i have to check if paragraphRef.current is there  */
        paragraphRef.current &&
          (paragraphRef.current!.innerText = txt.slice(0, num));
        num++;
      } else {
        clearInterval(interval);
      }
    }, 15);
  };
  return (
    <p
      className={style.aboutParagraph}
      ref={paragraphRef}
      style={{
        ["--userImg" as any]: `url(${data.img})`,
      }}
    ></p>
  );
};

export default AboutText;
