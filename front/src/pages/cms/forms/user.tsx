import { useState } from "react";
import Head from "next/head";
import style from "../../../styles/cms/_form.module.scss";
import Layout from "../../../layout";
import { NextPageWithLayout } from "../../../models/interfaces";
import instance from "../../../api/instance";
import { useRouter } from "next/router";

const UserForm: NextPageWithLayout = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    name: "",
    status: "",
    bio: "",
    skills: "",
    img: "",
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    instance.post("/user", input).then((res) => {
      res.status == 201 && router.push("/cms");
    });
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
