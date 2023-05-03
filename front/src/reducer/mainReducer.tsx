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
    case "GET_DATA":
      return { ...state, [category!]: data.sort(sortById), isLoading: false };

    case "ADD_DATA":
      return { ...state, [category!]: [...state[category!], data] };

    case "UPDATE_DATA":
      newList = state[category!].filter((item: any) => item._id !== data._id);
      return { ...state, [category!]: [...newList, data] };

    case "DELETE_DATA":
      newList = state[category!].filter((item: any) => item._id !== data);
      return { ...state, [category!]: newList };

    case "LOGIN_USER":
      return { ...state, token: data, isLoading: false };

    case "ADD_LIKE":
      newList = state[category!].filter((item: any) => item._id !== data._id);
      return {
        ...state,
        [category!]: [...newList, data].sort(sortById),
      };

    case "PAGE_INDEX":
      return { ...state, isLoading: false, pageIndex: data };

    case "LOADING":
      return { ...state, isLoading: !state.isLoading };
  }
};

export default MainReducer;
