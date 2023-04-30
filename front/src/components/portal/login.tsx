import { FC, useContext, useState } from "react";
import style from "./../../styles/cms/_portal.module.scss";
import Link from "next/link";
import { checkValidation } from "../../actions/apiRequest";
import MainContext from "../../context/mainContext";

const LoginPage: FC = () => {
  const [input, setInput] = useState({ email: "", pass: "" });
  const { dispatch } = useContext(MainContext);
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch!({ type: "LOADING" });
    checkValidation(input)
      .then((res) => {
        dispatch!({ type: "LOGIN_USER", payload: { data: res } });
      })
      .catch(() => {
        dispatch!({ type: "LOADING" });
      });
  };
  return (
    <form className={style.loginMain} onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="Email"
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={input.pass}
        onChange={(e) => setInput({ ...input, pass: e.target.value })}
      />
      <input type="submit" value="Login" className={style.submitBtn} />
      <Link href="/cms">forgot your password ? </Link>
    </form>
  );
};

export default LoginPage;
