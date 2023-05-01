import Head from "next/head";
import Layout from "../../layout";
import style from "../../styles/cms/_portal.module.scss";
import { NextPageWithLayout } from "../../models/interfaces";
import { useState } from "react";
import { resetPass } from "../../actions/apiRequest";
import { useRouter } from "next/router";

const PasswordRecover: NextPageWithLayout = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const recoveryHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    resetPass(input).then((res) => router.push("/cms"));
  };

  return (
    <>
      <Head>
        <title>passwordRecovery</title>
      </Head>
      <main className={style.cmsMain}>
        <form className={style.recoverForm} onSubmit={recoveryHandler}>
          <input
            type="email"
            placeholder="Email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Reset" className={style.submitBtn} />
        </form>
      </main>
    </>
  );
};

export default PasswordRecover;

PasswordRecover.getLayout = (page) => <Layout>{page}</Layout>;
