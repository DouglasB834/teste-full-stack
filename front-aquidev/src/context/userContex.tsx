"use client";
import { punkApi, userApi } from "@/apis";
import {
  IBeersList,
  ILoginUser,
  IRegisterUser,
  IUserContext,
  IUserResponse,
} from "@/interfaces";
import { useRouter, usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import Cookie from "js-cookie";

interface IUserChildrenProps {
  children: ReactNode;
}

export const UseContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserChildrenProps) => {
  const router = useRouter();
  const currentPath = usePathname();

  const [user, setUser] = useState<IUserResponse | null>({} as IUserResponse);
  const [token, setToken] = useState<string | null>();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorLogin, setErrorLoggin] = useState<undefined | string>(undefined);
  const [errorRegister, setErrorRegister] = useState<undefined | string>(
    undefined
  );
  const [errorSearchBeer, SeterrorSearchBeer] = useState<undefined | string>(
    undefined
  );

  const [beersList, setBeersList] = useState<IBeersList[]>([]);
  const [pageLimite, setPagelimite] = useState<number>(8);

  const userLogin = async (data: ILoginUser): Promise<void> => {
    try {
      const response = await userApi.post("/login", data);
      const user = response.data;
      Cookie.set("user_token", user.token);
      setToken(user.token);
      router.push("/home");
    } catch (error: any) {
      console.log(error.response.data);
      setErrorLoggin(error.response.data.message);
    }
  };

  const userRegister = async (data: IRegisterUser): Promise<void> => {
    try {
      const response = await userApi.post("/register", data);
      setErrorLoggin(undefined);
      setIsLogin(!isLogin);
    } catch (error: any) {
      console.log(error.response);
      setErrorRegister(error.response.data.message);
    }
  };

  const getUserProfile = async (): Promise<void> => {
    try {
      const token = Cookie.get("user_token");
      setToken(token);
      userApi.defaults.headers.authorization = `Bearer ${token}`;
      const response = await userApi.get("/profile");
      setUser(response.data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };

  const ListBeer = async (): Promise<any> => {
    try {
      const response = await punkApi.get(`/beers?per_page=${pageLimite}`);
      setBeersList(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchBeerByName = async (name: string): Promise<void> => {
    try {
      const response = await punkApi.get(`/beers?beer_name=${name}`);

      if (response?.data?.length === 0) {
        return SeterrorSearchBeer("Nenhum resultado encontrado");
      }

      setBeersList(response?.data);
    } catch (error) {
      console.log(error);
      ListBeer();
    }
    SeterrorSearchBeer(undefined);
  };

  const searchBeerByIBV = async (value: number): Promise<void> => {
    try {
      const response = await punkApi.get(`/beers?abv_lt=${value}`);
      setBeersList(response?.data);
    } catch (error) {
      console.log(error);
      ListBeer();
    }
  };

  const handleClearSearchBeer = () => {
    setPagelimite((limit) => (limit = 8));
    SeterrorSearchBeer(undefined);
    ListBeer();
  };

  const handlebeerListSortABV = () => {
    const sortedBeerList = [...beersList];
    sortedBeerList.sort((a: IBeersList, b: IBeersList) => a.abv - b.abv);
    setBeersList(sortedBeerList);
    SeterrorSearchBeer(undefined);
  };

  const handlebeerListSortName = () => {
    const sortedBeerListName = [...beersList];
    sortedBeerListName.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedBeerListName);
    setBeersList(sortedBeerListName);
    SeterrorSearchBeer(undefined);
  };

  useEffect(() => {
    if (
      currentPath.includes("/home") ||
      (currentPath.includes("beer") && !token)
    ) {
      getUserProfile();
      ListBeer();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath, token, pageLimite]);

  const value = {
    user,
    userLogin,
    userRegister,
    router,
    errorLogin,
    errorRegister,
    errorSearchBeer,
    SeterrorSearchBeer,
    isLogin,
    setIsLogin,
    beersList,
    isLoading,
    pageLimite,
    setPagelimite,
    searchBeerByName,
    ListBeer,
    handleClearSearchBeer,
    searchBeerByIBV,
    handlebeerListSortABV,
    handlebeerListSortName,
  };

  return <UseContext.Provider value={value}>{children}</UseContext.Provider>;
};
export const useUserContext = (): IUserContext => useContext(UseContext);
