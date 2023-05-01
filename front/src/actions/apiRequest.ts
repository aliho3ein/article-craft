import instance from "../api/instance";
import { article, login, work } from "../models/interfaces";
import { alertMassage } from "./alerts";

/***********************************POST */
export const addDataToDB = (
  category: string,
  data: object,
  callBack: Function
) => {
  instance
    .post(`/${category}`, data)
    .then((res) => {
      callBack(res.data);
    })
    .catch((err) => console.log("err"));
};

/***********************************PUT */
export const updateDataInDB = (
  category: string,
  id: any,
  data: object,
  callBack: Function
) => {
  instance
    .put(`/${category}/${id}`, data)
    .then((res) => {
      callBack(res.data);
    })
    .catch((err) => console.log("err"));
};

/***********************************DELETE */
export const deleteDataFromDB = (category: string, id: string) => {
  instance
    .delete(`/${category}/${id}`)
    .then((res) => true)
    .catch((err) => false);
};

/************************************GET USERS */
export const getUsersFromDB = async () => {
  return instance.get("/user").then((res) => Promise.resolve(res.data));
};

/***********************************CONTACT */
export const sendMail = (data: object) => {
  return instance
    .post("/contact", data)
    .then((res) => {
      alertMassage("Your massage has been sent successfully", "success", 6000);
      return Promise.resolve();
    })
    .catch((err) => {
      alertMassage("Failed , please try again", "error", 6000);
    });
};

/************************************Likes and view */
export const updateLikeAndView = (
  category: string,
  act: string,
  data: work | article
) => {
  act === "like" ? data.like++ : data.view++;
  instance
    .put(`/${category}/viewAndLike/${data._id}`, data)
    .then(
      () =>
        act === "like" &&
        alertMassage("I'm thankful for your feedback", "success", 6000)
    )
    .catch((err) => console.log("error while update Likes"));
};

/************************************CHECK VALIDATION */
export const checkValidation = async (data: login) => {
  return instance
    .post("user/login", data)
    .then((res) => {
      return res.status === 200
        ? (alertMassage(`Welcome back ${res.data[1]}`),
          Promise.resolve(res.data[0]))
        : Promise.reject(new Error());
    })
    .catch((err) => {
      alertMassage("Email or Password is false", "error");
      throw new Error();
    });
};

export const checkValidationById = async (id: string) => {
  instance
    .post("user/checkId", { id })
    .then((res) => res.status === 201 && Promise.resolve(res.data));
};

/******************************Reset Pass */
export const resetPass = async (email: string) => {
  return instance
    .post("user/reset", { mail: email })
    .then((res) => {
      alertMassage(
        "You should receive an email containing the new password shortly.",
        "info",
        8000
      );
      return Promise.resolve();
    })
    .catch((err) => {
      alertMassage(
        "There is no account associated with the email address",
        "error",
        8000
      );
      return Promise.reject();
    });
};

/**
alihossain.ahmadi@hotmail.com
 */
