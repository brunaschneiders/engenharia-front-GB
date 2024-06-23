export const BASE_URL = "https://engenharia-gb-356e9b866505.herokuapp.com";

export const NURSE_ID = "380414c5-e59b-4686-a42e-2cddafad6c2e";

export const ELDERLY_ID = "a67453b4-49fe-4bfc-88c4-1496162af0ae";

export enum USER_TYPE {
  NURSE = "NURSE",
  FAMILIAR = "FAMILIAR",
}

export const USER_NAME = {
  [USER_TYPE.FAMILIAR]: "Familiar",
  [USER_TYPE.NURSE]: "Enfermeiro",
};

export const LOGGED_USER_LOCAL_STORAGE_KEY = "logged-user";

export const ROUTES = {
  LOGIN: "/login",
  HOME: "/home",
};
