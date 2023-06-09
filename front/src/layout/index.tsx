import Navbar from "../components/navbar/bar";
import Footer from "../components/footer";
import React, { ReactNode, useEffect, useReducer } from "react";
/** */
import MainContext from "../context/mainContext";
import MainReducer from "../reducer/mainReducer";
import instance from "../api/instance";
import LoadingComponent from "../components/loading";
import { getLocalStorage } from "../actions/localStorage";
import { checkValidationById } from "../actions/apiRequest";
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
    isLoading: true,
    pageIndex: 1,
    pageSize: 12,
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  useEffect(() => {
    getDataFromDB();
    const token = getLocalStorage("token");
    token && logUserIn(token);
    console.log("layout");
  }, []);

  const getDataFromDB = () => {
    // dispatch({ type: "LOADING" });
    /* instance
      .get("")
      .then((res) => {
        res.status === 200 &&
          dispatch({ type: "GET_ALL_DATA", payload: { data: res.data } });
        dispatch({ type: "LOADING", payload: { data: false } });

        setTimeout(() => {
          console.log(res);
        }, 30000);
      })
      .catch((err) => console.log("error on layout"));*/
  };

  const logUserIn = (id: string) => {
    checkValidationById(id).then(() => {
      dispatch({ type: "LOGIN_USER", payload: { data: id } });
    });
  };

  return (
    <>
      <MainContext.Provider value={{ state, dispatch }}>
        <Navbar />
        {/* {state.isLoading && <LoadingComponent />} */}
        {children}
        <Footer />
      </MainContext.Provider>
    </>
  );
}
