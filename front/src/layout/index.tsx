import Navbar from "../components/navbar/bar";
import Footer from "../components/footer";
import React, { ReactNode, useEffect, useReducer } from "react";
/** */
import MainContext from "../context/mainContext";
import MainReducer from "../reducer/mainReducer";
import instance from "../api/instance";
/** */
interface props {
  children: ReactNode;
}

export default function Layout({ children }: props) {
  const initialState = {
    article: [],
    work: [],
    user: [],
    product: [],
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  useEffect(() => {
    getDataFromDB();
    console.log("fetch data");
  }, []);

  const getDataFromDB = () => {
    instance
      .get("")
      .then((res) => {
        dispatch({ type: "", payload: { data: res.data } });
      })
      .catch((err) => console.log("error on layout"));
  };

  return (
    <>
      <Navbar />
      <MainContext.Provider value={{ state, dispatch }}>
        {children}
      </MainContext.Provider>
      <Footer />
    </>
  );
}
