import React, { useEffect, useRef, useState } from "react";
import Layout from "../../layout";
import style from "../../../styles/cms/_form.module.scss";
import { NextPageWithLayout } from "../../models/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formType } from "../../models/interfaces";
import { useRouter } from "next/router";
import axios from "axios";

const Form: NextPageWithLayout = () => {
  const [inputs, setInputs] = useState<any>("");

  const formRef = useRef<HTMLFormElement>(null);

  const { id, form } = useRouter().query;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articleCraft/api/article/${id}`)
      .then((res) => {
        getData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getData = (dataInput) => {
    const result = Object.keys(dataInput).map((item, index) => {
      return <input key={index} type="input" name={item} placeholder={item} />;
    });
    setInputs(result);
  };

  const formHandel = (e) => {
    e.preventDefault();
    console.log(formRef.current?.title.value);
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
