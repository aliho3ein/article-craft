import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import style from "../../../styles/cms/_form.module.scss";
import Layout from "../../../layout";
import { NextPageWithLayout } from "../../../models/interfaces";
import { useRouter } from "next/router";
import { addDataToDB, updateDataInDB } from "../../../actions/apiRequest";
import MainContext from "../../../context/mainContext";
import { alertMassage } from "../../../actions/alerts";

const UserForm: NextPageWithLayout = () => {
  const router = useRouter();
  const { dispatch, state } = useContext(MainContext);

  const { ID } = router.query;

  useEffect(() => {
    ID && getDataForEdit();
  }, []);

  const [input, setInput] = useState({
    name: "",
    status: "",
    bio: "",
    skills: "",
    img: "",
  });

  const getDataForEdit = () => {
    const data: any = state!.user.find((item) => {
      return item._id === ID;
    });

    setInput({
      name: data.name,
      status: data.status,
      bio: data.bio,
      skills: data.skills,
      img: data.img,
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    ID
      ? updateDataInDB("user", ID, input, getResult)
      : addDataToDB("user", input, getResult);
  };

  const getResult = (data: object) => {
    ID
      ? dispatch!({
          type: "UPDATE_DATA",
          payload: {
            category: "user",
            data,
          },
        })
      : dispatch!({
          type: "ADD_DATA",
          payload: {
            category: "user",
            data,
          },
        });
    alertMassage("The operation was successful");
    router.push("/cms/category?key=user");
  };

  return (
    <>
      <Head>
        <title>UserForm</title>
      </Head>
      <main className={style.formMain}>
        <form onSubmit={submitHandler}>
          <input
            type="input"
            name="name"
            placeholder="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <textarea
            name="bio"
            rows={20}
            placeholder="bio"
            value={input.bio}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          ></textarea>
          <input
            type="input"
            name="status"
            placeholder="status"
            value={input.status}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <input
            type="input"
            name="img"
            placeholder="Image"
            value={input.img}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <input
            type="input"
            name="skills"
            placeholder="skills : react,next etc"
            value={input.skills}
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

export default UserForm;

UserForm.getLayout = (page) => <Layout>{page}</Layout>;
2;
