import instance from "../api/instance";
import { article, work } from "../models/interfaces";
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

/***********************************CONTACT */
export const sendMail = (data: object) => {
  instance.post("/contact", data);
  alertMassage("Your massage has been sent successfully", "success", 6000);
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
