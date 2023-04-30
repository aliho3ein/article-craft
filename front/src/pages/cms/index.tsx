import Head from "next/head";
import Layout from "../../layout";
import style from "../../styles/cms/_portal.module.scss";
import { NextPageWithLayout } from "../../models/interfaces";
import Portal from "../../components/portal";
import LoginPage from "../../components/portal/login";
import { useContext } from "react";
import MainContext from "../../context/mainContext";

const PortalPage: NextPageWithLayout = () => {
  const { state } = useContext(MainContext);

  return (
    <>
      <Head>
        <title>managePortal</title>
      </Head>
      <main className={style.cmsMain}>
        {state!.token ? <Portal /> : <LoginPage />}
      </main>
    </>
  );
};

export default PortalPage;

PortalPage.getLayout = (page) => <Layout>{page}</Layout>;
