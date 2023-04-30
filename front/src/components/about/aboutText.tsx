import { FC, useEffect, useRef } from "react";
import style from "src/styles/component/_about.module.scss";
import Skill from "../skillCard";
import { user } from "../../models/interfaces";

interface userType {
  data: user;
}

const AboutText: FC<userType> = ({ data }) => {
  const paragraphRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    /** start typing if scroll till paragraph */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeText(data.bio);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(paragraphRef.current!);
    return () => {
      observer.disconnect();
    };
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

  const skill = data.skills.split(",").map((item: string, index: number) => {
    return <Skill key={index} value={item} />;
  });

  return (
    <div className={style.aboutCard}>
      <p
        className={style.aboutParagraph}
        ref={paragraphRef}
        style={{
          ["--userImg" as any]: `url(${data.img})`,
        }}
      ></p>
      <div className={style.info}>
        <span>skills and expertise :</span>
        {skill}
      </div>
    </div>
  );
};

export default AboutText;
