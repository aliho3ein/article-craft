import Head from "next/head";
import { NextPageWithLayout } from "../models/interfaces";
import Layout from "../layout";
/** */
import style from "src/styles/component/_about.module.scss";
/** component */
import Header from "../components/header/header";
import { useEffect, useRef } from "react";

/** ABOUT/HOME **/
const Home: NextPageWithLayout = () => {
  const paragraphRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    /** start typing if scroll till paragraph */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeText(data[Math.floor(Math.random() * data.length)]);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(aboutRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const typeText = (txt: any) => {
    let num = 0;
    const interval = setInterval(() => {
      if (num <= txt.length - 1) {
        paragraphRef.current!.innerText = txt.slice(0, num);
        num++;
      } else {
        clearInterval(interval);
      }
    }, 15);
  };

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Header />
      <main className={style.aboutMain} ref={aboutRef}>
        <p className={style.aboutParagraph} ref={paragraphRef}></p>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page: any) => <Layout>{page}</Layout>;

const data = [
  `Hi guys, my name is Ali and I'm a Web Developer. I write articles about what I love and what interests me, the truth is that it's not easy to be motivated when your job is boring. You are tired after work, you go home, you eat with your family, do some stuff on the internet like checking Facebook or playing games but nothing really matters except for work. There are many articles like this but I want to make mine better than others:)`,
  `Hi guys! My name is Ali and I'm a Web Developer. I'm kinda bored of writing articles about boring stuff, so I thought: "Hey, you should write about something you really enjoy! So that way you can be motivated to write more and better content. for me is important to know how technology works, how it can improve life and what has happened in the world of technology.`,
  `Hi. I'm Ali, a Web Developer. I got started in web development back in 2015 when I dropped out of college after just one year. While browsing reddit one day, I saw an advertisement for a free HTML/CSS learning site called frontendMaster. I decided to give it a shot and devoured all the lessons it had to offer. It was here that my passion for coding was kindled and it wasn't long until my dream to be able to code full time finally came true! Nowadays I make use of my valuable experience and provide web development advice, tips and tutorials to anyone who is looking for help.`,
  `Hi. I'm Ali, and I'm a Web Developer who loves to code in my free time. I started learning how to code after dropping out of college because I was inspired by all the cool projects the students were working on. When others were sleeping, I was up late browsing reddit and discovering new sites where I could learn new skills. Eventually, due to my hard work, my dream of becoming a Web Developer came true! Today, I spend most of my time helping others make the most out of their skills.`,
  `Hi, my name is Ali. I am a full-stack web developer and make use of my experience to help people become web developers too. My passion for coding was kindled when I was browsing reddit back in 2015 and came across a free website that helped me learn how to code. It's been a passion of mine ever since. I like to research new technologies and programming languages. I wants to share the skills I've acquired of my experience.`,
  `Hi. I'm Ali, a full-stack MERN web developer who is passionate about building awesome stuff. I specialize in HTML and CSS but my experience also extends to Javascript , Node and React - I can do just about anything related to coding! i like to take every day a new challenge and try to solve it with a new way of thinking.`,
];
