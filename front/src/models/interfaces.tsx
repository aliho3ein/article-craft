import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface user {
  _id: string;
  name: string;
  status: string;
  skills: string;
  bio: string;
  img: string;
}
export interface work {
  _id: string;
  title: string;
  desc: string;
  link: string;
  img: string;
  view: number;
  like: number;
}

export interface article {
  _id: string;
  title: string;
  desc: string;
  img: string;
  view: number;
  like: number;
  date: string;
  userId: string;
  hashTag: string;
}

export interface workType {
  value: work;
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
