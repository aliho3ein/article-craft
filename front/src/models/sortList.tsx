interface sortType {
  view: number;
}

const sortByView = (a: sortType, b: sortType) => {
  if (a.view > b.view) {
    return +1;
  } else if (a.view < b.view) {
    return -1;
  } else return 0;
};

export { sortByView };
