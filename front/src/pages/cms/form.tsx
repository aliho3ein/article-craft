import React, { useEffect, useRef, useState } from "react";
import Layout from "../../layout";
import style from "../../../styles/cms/_form.module.scss";
import { NextPageWithLayout } from "../../models/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formType } from "../../models/interfaces";
import { useRouter } from "next/router";
import axios from "axios";

const Form: NextPageWithLayout = () => {
  const [inputs, setInputs] = useState<any>([]);
  const [dumType, setDumType] = useState<string[]>([]);

  const formRef = useRef<HTMLFormElement>(null);

  const { id, form } = useRouter().query;

  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/articleCraft/api/article/${id}`)
    //   .then((res) => {
    //    getData(res.data);
    //   })
    //   .catch((err) => console.log(err));

    switch (form) {
      case "article":
        setDumType(typeOfForms.article);
        break;
      case "work":
        setDumType(typeOfForms.work);
        break;
      case "shop":
        setDumType(typeOfForms.shop);
        break;
      default:
        setDumType(typeOfForms.user);
        break;
    }

    getData(dumType);
  }, []);

  const getData = (tYpE: any) => {
    let arr = [];
    console.log(tYpE);

    for (const item of dumType) {
      const result = (
        <input key={item} type="input" name={item} placeholder={item} />
      );
      arr.push(result);
    }
    setInputs(arr);
  };

  const formHandel = (e: any) => {
    e.preventDefault();

    // console.log(formRef.current!["title"].value);
    console.log(dumType);

    for (const item of dumType) {
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={formHandel}>
        {inputs}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;

Form.getLayout = (page) => <Layout>{page}</Layout>;

const typeOfForms = {
  article: ["title", "desc", "img"],
  work: [],
  shop: [],
  user: [],
};
