interface sortType {
  view: number;
  createdAt: string;
  _id: string;
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

export const sortById = (a: sortType, b: sortType) => {
  if (a._id > b._id) {
    return -1;
  } else if (a._id < b._id) {
    return +1;
  } else return 0;
};
