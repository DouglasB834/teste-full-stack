import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ILoginUser {
  email: string;
  password: string;
}
export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confiPassword: string;
  avatar?: string;
}
export interface IUserResponse {
  updatedAt: Date;
  createdAt: Date;
  avatar?: string;
  email: string;
  name: string;
  id: string;
}
export interface IUserContext {
  userLogin: (data: ILoginUser) => void;
  user: IUserResponse | null;
  router: AppRouterInstance;
  errorLogin: undefined | string;
  errorRegister: undefined | string;
  errorSearchBeer: undefined | string;
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  SeterrorSearchBeer: Dispatch<SetStateAction<string | undefined>>;
  userRegister: (data: IRegisterUser) => void;
  beersList: IBeersList[];
  isLoading: boolean;
  pageLimite: number;
  setPagelimite: Dispatch<SetStateAction<number>>;
  searchBeerByName: (name: string) => void;
  ListBeer: () => void;
  handleClearSearchBeer: () => void;
  searchBeerByIBV(ibv: number): void;
  handlebeerListSortABV: () => void;
  handlebeerListSortName: () => void;
}

export interface IBeersList {
  abv: number;
  attenuation_level: number;
  brewers_tips: string;
  description: string;
  abc: number;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  name: string;
  ph: number;
  tagline: string;
  first_brewed: string;
  contributed_by: string;
}

export interface IDataFeedBack {
  id: number;
  name: string;
  image: StaticImageData;
  feedback: string;
  stars: number;
}
