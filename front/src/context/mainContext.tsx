import { createContext } from "react";

const MainContext = createContext({
  articles: [
    {
      id: "",
      title: "",
      desc: "",
      img: "",
      view: 0,
      like: 0,
      date: "",
      userId: "",
      hashTag: "",
    },
  ],
  works: [
    {
      id: "",
      title: "",
      desc: "",
      link: "",
      img: "",
      view: 0,
      like: 0,
      date: "",
    },
  ],
  users: [
    {
      id: "",
      name: "",
      status: "",
      bio: "",
      img: "",
    },
  ],
  products: [],
});

export default MainContext;
