import { Dispatch, SetStateAction } from "react";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface articleType {
  value: {
    id: string;
    title: string;
    desc: string;
    img: string;
    view: number;
    like: number;
    date: string;
    userId: string;
  };
}

export interface article {
  id: string;
  title: string;
  desc: string;
  img: string;
  view: number;
  like: number;
  date: string;
  userId: string;
}

export interface workType {
  value: {
    id: string;
    title: string;
    desc: string;
    link: string;
    img: string;
    view: number;
    like: number;
    date: string;
  };
  index: number;
}

export interface skillType {
  value: string | null;
}

export interface formType {
  form?: string;
  data?: {
    title?: string;
    des?: string;
    link?: string;
    img?: string;
    hashTag?: string;
    name?: string;
    bio?: string;
    skills?: string;
    status?: string;
    price?: number;
  };
}
