import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import style from "../../../styles/cms/_form.module.scss";
import Layout from "../../../layout";
import { NextPageWithLayout } from "../../../models/interfaces";
import { useRouter } from "next/router";
import MainContext from "../../../context/mainContext";
import { addDataToDB, updateDataInDB } from "../../../actions/apiRequest";

const ArticleForm: NextPageWithLayout = () => {
  const router = useRouter();
  const { ID } = router.query;
  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    ID && getDataForEdit();
  }, [ID]);

  const getDataForEdit = () => {
    const data: any = state!.article.find((item) => {
      return item._id === ID;
    });

    setInput({
      title: data.title,
      desc: data.desc,
      img: data.img,
      hashTag: data.hashTag,
    });
  };

  const [input, setInput] = useState({
    title: "",
    desc: "",
    img: "",
    hashTag: "",
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    ID
      ? updateDataInDB("article", ID, input, getResult)
      : addDataToDB("article", input, getResult);
  };

  const getResult = (data: object) => {
    ID
      ? dispatch!({
          type: "UPDATE_DATA",
          payload: {
            category: "article",
            data,
          },
        })
      : dispatch!({
          type: "ADD_DATA",
          payload: {
            category: "article",
            data,
          },
        });

    router.push("/cms/category?key=article");
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
