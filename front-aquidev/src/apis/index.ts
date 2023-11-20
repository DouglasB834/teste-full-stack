import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:3001/",
}); //colocar da doc para verificar se api esta na rota 3001

export const punkApi = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
  timeout: 5000,
});
export const apiFile = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
});
