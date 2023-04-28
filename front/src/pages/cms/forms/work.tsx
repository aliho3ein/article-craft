import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import style from "../../../styles/cms/_form.module.scss";
import Layout from "../../../layout";
import { NextPageWithLayout } from "../../../models/interfaces";
import { useRouter } from "next/router";
import MainContext from "../../../context/mainContext";
import { addDataToDB, updateDataInDB } from "../../../actions/apiRequest";
import { alertMassage } from "../../../actions/alerts";

const WorkForm: NextPageWithLayout = () => {
  const router = useRouter();
  const { ID } = router.query;
  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    ID && getDataForEdit();
  }, [ID]);

  const getDataForEdit = () => {
    const data: any = state!.work.find((item) => {
      return item._id === ID;
    });

    setInput({
      title: data.title,
      desc: data.desc,
      img: data.img,
      link: data.link,
    });
  };

  const [input, setInput] = useState({
    title: "",
    desc: "",
    img: "",
    link: "",
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    ID
      ? updateDataInDB("work", ID, input, getResult)
      : addDataToDB("work", input, getResult);
  };

  const getResult = (data: object) => {
    ID
      ? dispatch!({
          type: "UPDATE_DATA",
          payload: {
            category: "work",
            data,
          },
        })
      : dispatch!({
          type: "ADD_DATA",
          payload: {
            category: "work",
            data,
          },
        });
    alertMassage("The operation was successful");
    router.push("/cms/category?key=work");
  };

  return (
    <>
      <Head>
        <title>WorkForm</title>
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
            name="link"
            placeholder="link"
            value={input.link}
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

export default WorkForm;

WorkForm.getLayout = (page) => <Layout>{page}</Layout>;
2;
