export const BASE_URL = "https://engenharia-gb-356e9b866505.herokuapp.com";

export const MOCKED_NURSE_ID = "380414c5-e59b-4686-a42e-2cddafad6c2e";

export const MOCKED_RESPONSABLE_ID = "bb28e268-3f94-4b0c-ae7c-e002043975b9";

export const MOCKED_ELDERLY = {
  id: "a67453b4-49fe-4bfc-88c4-1496162af0ae",
  name: "Tera  DDS",
};

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
