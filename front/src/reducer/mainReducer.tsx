import { sortByDateReverse, sortById } from "../models/sortList";

interface reducerAction {
  type: string;
  payload?: {
    category?: string;
    data?: any;
  };
}

const MainReducer = (state: any, action: reducerAction) => {
  const { category, data } = action.payload ?? {};

  let newList;

  switch (action.type) {
    case "ADD_DATA":
      return { ...state, [category!]: [...state[category!], data] };

    case "GET_USERS":
      return { ...state, user: data };

    case "UPDATE_DATA":
      newList = state[category!].filter((item: any) => item._id !== data._id);
      return { ...state, [category!]: [...newList, data] };

    case "DELETE_DATA":
      newList = state[category!].filter((item: any) => item._id !== data);
      return { ...state, [category!]: newList };

    case "SORT_ARTICLE":
      return { ...state, article: state.article.sort(sortById) };

    case "LOGIN_USER":
      return { ...state, token: data, isLoading: false };

    case "ADD_LIKE":
      newList = state[category!].filter((item: any) => item._id !== data._id);
      return {
        ...state,
        [category!]: [...newList, data].sort(sortById),
      };

    case "LOADING":
      return { ...state, isLoading: !state.isLoading };

    default:
      // fetch DATA
      return {
        ...state,
        ...data,
        work: data.work.sort(sortById),
        article: data.article.sort(sortById),
        isLoading: false,
      };
  }
};

export default MainReducer;
