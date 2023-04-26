import instance from "../api/instance";

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
