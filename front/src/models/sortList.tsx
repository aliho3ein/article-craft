interface sortType {
  view: number;
  createdAt: string;
}

export const sortByView = (a: sortType, b: sortType) => {
  if (a.view > b.view) {
    return +1;
  } else if (a.view < b.view) {
    return -1;
  } else return 0;
};

export const sortByDateReverse = (a: sortType, b: sortType) => {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else if (a.createdAt < b.createdAt) {
    return +1;
  } else return 0;
};
