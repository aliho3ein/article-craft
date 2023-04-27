import instance from "../api/instance";
import { article } from "../models/interfaces";

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
};

/************************************article views */
export const increaseView = (data: article) => {
  data.view++;
  instance
    .put(`/article/viewAndLike/${data._id}`, data)
    .catch((err) => console.log("error while update view"));
};

/************************************article Likes */
export const increaseLike = (data: article) => {
  data.like++;
  instance
    .put(`/article/viewAndLike/${data._id}`, data)
    .catch((err) => console.log("error while update Likes"));
};
