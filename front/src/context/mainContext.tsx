import React, { createContext } from "react";
import { article, user, work } from "../models/interfaces";

const MainContext = createContext<{
  state?: {
    article: article[];
    work: work[];
    user: user[];
    product: [];
    token: string | null;
    isLoading: boolean;
    pageIndex: number;
    pageSize: number;
  };
  dispatch?: React.Dispatch<any>;
}>({});

export default MainContext;
