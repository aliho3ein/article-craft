import { useState } from "react";
import Head from "next/head";
import style from "../../../styles/cms/_form.module.scss";
import Layout from "../../../layout";
import { NextPageWithLayout } from "../../../models/interfaces";
import instance from "../../../api/instance";
import { useRouter } from "next/router";

const ArticleForm: NextPageWithLayout = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    title: "",
    desc: "",
    img: "",
    hashTag: "",
  });

  const submitHandler = (e: any) => {
    e.preventDefault();

    instance
      .post("/article", input)
      .then((res) => {
        res.status == 201 && router.push("/cms");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>articleForm</title>
      </Head>
      <main className={style.formMain}>
        <form onSubmit={submitHandler}>
          <input
            type="input"
            name="title"
            placeholder="title"
            value={input.title}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <textarea
            name="desc"
            rows={20}
            placeholder="description"
            value={input.desc}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          ></textarea>
          <input
            type="input"
            name="img"
            placeholder="image"
            value={input.img}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <input
            type="input"
            name="hashTag"
            placeholder="Tags : react , node , html etc"
            value={input.hashTag}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <input type="submit" value="submit" />
        </form>
      </main>
    </>
  );
};

export default ArticleForm;

ArticleForm.getLayout = (page) => <Layout>{page}</Layout>;
2;
