import { FC, RefObject, useContext, useRef, useState } from "react";
import Link from "next/link";
import { checkValidation } from "../../actions/apiRequest";
import MainContext from "../../context/mainContext";
import { setLocalStorage } from "../../actions/localStorage";
import { log } from "console";

const LoginPage: FC = () => {
  const savePass: RefObject<HTMLInputElement> = useRef(null);

  const [input, setInput] = useState({ email: "", pass: "" });

  const { dispatch } = useContext(MainContext);

  /** Check user Validation */
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch!({ type: "LOADING" });

    checkValidation(input)
      .then((res) => {
        dispatch!({ type: "LOGIN_USER", payload: { data: res } });
        /** set in localStorage */
        savePass.current!.checked && setLocalStorage("token", res);
      })
      .catch(() => {
        dispatch!({ type: "LOADING" });
      });
  };
  return (
    <form id="loginMain" onSubmit={submitHandler}>
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
      <label className="checkBox" htmlFor="passRemember">
        <input type="checkbox" name="pass" id="passRemember" ref={savePass} />
        <span>Remember my Password</span>
      </label>
      <input type="submit" value="Login" className="submitBtn" />
      <Link href="/cms/passRecover">Forgot my password ? </Link>
    </form>
  );
};

export default LoginPage;
