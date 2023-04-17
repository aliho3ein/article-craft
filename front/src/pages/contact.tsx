import Head from "next/head";
import Layout from "../layout";
import style from "../styles/component/_contact.module.scss";
import { NextPageWithLayout } from "../models/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Contact: NextPageWithLayout = () => {
  const [input, setInput] = useState({ name: "", email: "", massage: "" });

  const submitMassage = (e: any) => {
    e.preventDefault();
    console.log(input);

    setInput({ name: "", email: "", massage: "" });
  };

  return (
    <>
      <Head>
        <title>ContactMe</title>
      </Head>
      <main className={style.contactMain}>
        <section className={style.contactArea}>
          <h2>Let's get in touch</h2>
          <aside className={style.contactInfo}>
            <span>
              <FontAwesomeIcon icon={faPhone} className={style.icon} />
              (+49) 01623452463
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              aliho3ein.de@gmail.com
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className={style.icon} />
              Elfenhang str. 42329 wuppertal
            </span>
          </aside>
          <form className={style.contactForm} onSubmit={submitMassage}>
            <label htmlFor="name">
              yourName
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                placeholder="John"
                className={style.inputForm}
              />
            </label>

            <label htmlFor="email">
              eMail
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                placeholder="john@mail.com"
                className={style.inputForm}
              />
            </label>

            <label htmlFor="massage">
              yourMassage
              <textarea
                name="massage"
                value={input.massage}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                placeholder="Hey ..."
                rows={8}
                className={style.inputForm}
              />
            </label>

            <input type="submit" value="Submit" />
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;

Contact.getLayout = (page) => <Layout>{page}</Layout>;
