import Navbar from "../components/navbar/bar";
import Footer from "../components/footer";
import React, { ReactNode, useEffect, useReducer } from "react";
/** */
import MainContext from "../context/mainContext";
import MainReducer from "../reducer/mainReducer";
import instance from "../api/instance";
/** */
interface props {
  children: ReactNode;
}

export default function Layout({ children }: props) {
  const initialState = {
    article: [],
    work: [],
    user: [],
    product: [],
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  useEffect(() => {
    getDataFromDB();
    console.log("layout");
  }, []);

  const getDataFromDB = () => {
    instance
      .get("")
      .then((res) => {
        dispatch({ type: "", payload: { data: res.data } });
      })
      .catch((err) => console.log("error on layout"));
  };

  return (
    <>
      <Navbar />
      <MainContext.Provider value={{ state, dispatch }}>
        {children}
      </MainContext.Provider>
      <Footer />
    </>
  );
}

/**
 * works: [
      {
        id: "1",
        title: "Todo List",
        desc: ` The TodoList Website is a high-quality website template that was created in October 2022 using React, HTML, and CSS. Our website template is designed to provide a simple, yet powerful, solution for anyone looking to create a to-do list website.

        With the TodoList Website, you can easily create and manage tasks, set deadlines, and prioritize your work. The website is user-friendly and intuitive, making it easy to use for anyone, regardless of their level of technical expertise.`,
        link: "https://main--aufgaben-list.netlify.app/",
        img: "https://baryon.be/wp-content/uploads/2020/05/3528471-01.jpg",
        view: 50,
        like: 15,
        date: "",
      },
      {
        id: "2",
        title: "my Blog",
        desc: ` The Blog Template is a high-quality website template that was created in December 2022 using React, HTML, and Sass. Our website template is designed to provide a clean, modern, and user-friendly solution for anyone looking to create a blog website.

        With the Blog Template, you can easily publish your articles and engage with your readers. The website is responsive and intuitive, making it easy to use for visitors on desktop or mobile devices.`,
        link: "https://my-blog-de.netlify.app/",
        img: "https://img.freepik.com/vector-premium/concepto-plano-moderno-marketing-redes-sociales-diseno-banner-web-mujer-comercializadora-hace_9209-8386.jpg?w=2000",
        view: 30,
        like: 15,
        date: "",
      },
      {
        id: "3",
        title: "Pizzaria",
        desc: ` Created in November 2022, the FastFood Website Template is a high-quality website template designed specifically for building fast food websites. This template was built using a range of cutting-edge code technologies, including React, Redux, HTML, CSS, and Sass, to ensure a modern, efficient, and user-friendly website.

        Whether you're a business owner looking to improve your online presence or an individual looking to build a fast food website, the FastFood Website Template has everything you need. Our template includes a customizable menu, online ordering system, and contact form, making it easy to create a fast food website that meets your specific needs.`,
        link: "https://pizzaria-de.netlify.app/",
        img: "https://img.freepik.com/free-vector/happy-people-shopping-online_74855-5865.jpg",
        view: 90,
        like: 85,
        date: "",
      },
      {
        id: "4",
        title: "online Marketing",
        desc: ` The OnlineMarketing Website was created in December 2022 using React, HTML, and Sass. Our website template is designed to provide a powerful and intuitive solution for anyone looking to create an online marketing website.

        With the OnlineMarketing Website, you can easily showcase your products and services, provide information about your business, and engage with your customers. The website is responsive and user-friendly, making it easy to use for visitors on desktop or mobile devices.
        
        Our template is also highly customizable, allowing you to adjust the layout, color scheme, and other design elements to match your brand and marketing strategy. This makes it easy to create a personalized online marketing website that meets your specific needs and helps your business stand out.`,
        link: "https://ma-consulting.netlify.app/",
        img: "https://static.vecteezy.com/system/resources/thumbnails/005/878/743/small_2x/marketing-modern-flat-concept-for-web-banner-design-male-marketer-analyzes-market-research-data-at-dashboard-optimized-strategy-and-promote-business-illustration-with-isolated-people-scene-free-vector.jpg",
        view: 45,
        like: 18,
        date: "",
      },
      {
        id: "5",
        title: "Dashboard",
        desc: ` The CMS Website is a high-quality content management system that was created in January 2023 using Next.js, TypeScript, HTML, and Sass. Our website template is designed to provide an efficient and user-friendly solution for anyone looking to manage their website's content, products, and design.

        With the CMS Website, you can easily create and manage categories for your products, as well as individual products within each category. Our template also allows website managers to change the font, color, and overall theme of the website with ease, giving you complete control over the look and feel of your website.
        
        Our template is highly customizable, and we have used TypeScript to ensure robust type-checking and prevent common errors. This makes it easy for developers to build and customize the CMS Website according to their specific needs.`,
        link: "https://manage-dashboard.netlify.app/",
        img: "https://elements-cover-images-0.imgix.net/727091cf-69db-4e6f-8f69-ee77b851091a?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=71dc7d253f8bf394d01ac427aa5417a2",
        view: 78,
        like: 63,
        date: "",
      },
      {
        id: "6",
        title: "Shopy (online-shop)",
        desc: ` Shopy is a high-quality e-commerce website that specializes in selling electronic devices such as mobile phones, laptops, TVs, and tablets. Our website was built using a range of cutting-edge code technologies, including HTML, CSS (Sass), Typescript, and React, to ensure a modern, efficient, and user-friendly shopping experience for our customers.

        In addition to our intuitive and user-friendly front-end, Shopy is also supported by a robust back-end built on Firebase.`,
        link: "https://online-meidamarket.netlify.app/",
        img: "https://elements-cover-images-0.imgix.net/4da51b71-31f2-4fbb-bdd7-9f64666729be?auto=compress%2Cformat&fit=max&w=900&s=d66e1b3e1c1c160ffb64b10e2d2d0802",
        view: 63,
        like: 57,
        date: "",
      },
    ],
 */
