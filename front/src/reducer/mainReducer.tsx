const MainReducer = (state: any, action: any) => {
  const { category, data } = action.payload;

  switch (action.type) {
    case "UPDATE_DATA":
      let newList = state[category].filter(
        (item: any) => item._id !== data._id
      );
      return { ...state, [category]: [...newList, data] };
    case "DELETE_PRODUCTS":
      break;
    default:
      return { ...state, ...data };
  }

  return state;
};

export default MainReducer;
