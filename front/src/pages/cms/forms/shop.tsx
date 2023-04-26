import { useState } from "react";
import Head from "next/head";
import style from "../../../styles/cms/_form.module.scss";
import Layout from "../../../layout";
import { NextPageWithLayout } from "../../../models/interfaces";

const ShopForm: NextPageWithLayout = () => {
  const [input, setInput] = useState({ title: "", des: "", img: "" });

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <>
      <Head>
        <title>ShopForm</title>
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
            name="des"
            rows={20}
            placeholder="des"
            value={input.des}
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
          <input type="submit" value="submit" />
        </form>
      </main>
    </>
  );
};

export default ShopForm;

ShopForm.getLayout = (page) => <Layout>{page}</Layout>;
2;
