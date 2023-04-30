import Navbar from "../components/navbar/bar";
import Footer from "../components/footer";
import React, { ReactNode, useEffect, useReducer } from "react";
/** */
import MainContext from "../context/mainContext";
import MainReducer from "../reducer/mainReducer";
import instance from "../api/instance";
import LoadingComponent from "../components/loading";
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
    token: "644d61f17155db731aaf5074", // 644d61f17155db731aaf5074
    isLoading: false,
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  useEffect(() => {
    getDataFromDB();
  }, []);

  const getDataFromDB = () => {
    dispatch({ type: "LOADING" });
    instance
      .get("")
      .then((res) => {
        dispatch({ type: "", payload: { data: res.data } });
      })
      .catch((err) => console.log("error on layout"));
  };

  return (
    <>
      <MainContext.Provider value={{ state, dispatch }}>
        <Navbar />
        {state.isLoading && <LoadingComponent />}
        {children}
        <Footer />
      </MainContext.Provider>
    </>
  );
}
