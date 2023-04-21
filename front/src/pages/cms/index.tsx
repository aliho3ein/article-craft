import Head from "next/head";
import Layout from "../../layout";
import style from "../../styles/cms/_portal.module.scss";
import { NextPageWithLayout } from "../../models/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Portal: NextPageWithLayout = () => {
  const rout = useRouter();

  return (
    <>
      <Head>
        <title>managePortal</title>
      </Head>
      <main className={style.cmsMain}>
        <nav>
          <div
            className={style.navCard}
            onClick={() => {
              rout.push("/cms/category?key=article");
            }}
          >
            <Link href="/cms/forms/article" className={style.addBtn}>
              <FontAwesomeIcon icon={faPlus} />
            </Link>
            <div className={style.img}></div>
            <h2>Articles</h2>
          </div>

          <div
            className={style.navCard}
            onClick={() => {
              rout.push("/cms/category?key=shop");
            }}
          >
            <Link href="/cms/forms/shop" className={style.addBtn}>
              <FontAwesomeIcon icon={faPlus} />
            </Link>
            <div className={style.img}></div>
            <h2>Shop</h2>
          </div>

          <div
            className={style.navCard}
            onClick={() => {
              rout.push("/cms/category?key=work");
            }}
          >
            <Link href="/cms/forms/work" className={style.addBtn}>
              <FontAwesomeIcon icon={faPlus} />
            </Link>
            <div className={style.img}></div>
            <h2>Work</h2>
          </div>

          <div
            className={style.navCard}
            onClick={() => {
              rout.push("/cms/category?key=user");
            }}
          >
            <Link href="/cms/forms/user" className={style.addBtn}>
              <FontAwesomeIcon icon={faPlus} />
            </Link>
            <div className={style.img}></div>
            <h2>Users</h2>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Portal;

Portal.getLayout = (page) => <Layout>{page}</Layout>;
