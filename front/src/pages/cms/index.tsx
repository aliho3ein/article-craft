import Head from "next/head";
import Layout from "../../layout";
import style from "../../styles/cms/_portal.module.scss";
import { NextPageWithLayout } from "../../models/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Portal: NextPageWithLayout = () => {
  return (
    <>
      <main className={style.cmsMain}>
        <nav>
          <div className={style.navCard}>
            <Link
              href="/cms/form?form=article&id=643e4c2671b3bbe62d2e682f"
              className={style.addBtn}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Link>
            <div className={style.img}></div>
            <h2>Articles</h2>
          </div>

          <div className={style.navCard}>
            <div className={style.addBtn}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className={style.img}></div>
            <h2>Shop</h2>
          </div>

          <div className={style.navCard}>
            <div className={style.addBtn}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className={style.img}></div>
            <h2>Work</h2>
          </div>

          <div className={style.navCard}>
            <div className={style.addBtn}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
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
