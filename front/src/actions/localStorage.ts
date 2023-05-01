import { alertMassage } from "./alerts";

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};

/** check Liked item */
export const checkLike = (id: string) => {
  const likes = getLocalStorage("likes");

  if (likes) {
    if (likes.includes(id)) {
      alertMassage(
        "You've already shown your appreciation for this Item.",
        "info",
        6000
      );
      return false;
    } else {
      likes.push(id);
      setLocalStorage("likes", likes);
    }
  } else {
    setLocalStorage("likes", [id]);
  }
  return true;
};
