import { sortByDateReverse } from "../models/sortList";

const MainReducer = (state: any, action: any) => {
  const { category, data } = action.payload;

  let newList;

  switch (action.type) {
    case "ADD_DATA":
      return { ...state, [category]: [...state[category], data] };

    case "UPDATE_DATA":
      newList = state[category].filter((item: any) => item._id !== data._id);
      return { ...state, [category]: [...newList, data] };

    case "DELETE_DATA":
      newList = state[category].filter((item: any) => item._id !== data);
      return { ...state, [category]: newList };

    case "SORT_ARTICLE":
      return { ...state, article: state.article.sort(sortByDateReverse) };

    case "ADD_LIKE":
      newList = state.article.map((item: any) => {
        item._id === data._id && item.like++;
        return item;
      });
      return { ...state, article: newList };

    default:
      // fetch DATA
      return { ...state, ...data };
  }

  return state;
};

export default MainReducer;
