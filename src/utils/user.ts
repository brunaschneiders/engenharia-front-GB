import { LOGGED_USER_LOCAL_STORAGE_KEY, USER_TYPE } from "../constants";

export const isNurse = () =>
  localStorage.getItem(LOGGED_USER_LOCAL_STORAGE_KEY) === USER_TYPE.NURSE;

export const isFamiliar = () =>
  localStorage.getItem(LOGGED_USER_LOCAL_STORAGE_KEY) === USER_TYPE.FAMILIAR;
