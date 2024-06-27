import { Visit } from "./types";

export const BASE_URL = "https://engenharia-gb-356e9b866505.herokuapp.com";

export const MOCKED_NURSE_ID = "380414c5-e59b-4686-a42e-2cddafad6c2e";

export const MOCKED_RESPONSABLE_ID = "bb28e268-3f94-4b0c-ae7c-e002043975b9";

export const MOCKED_ELDERLY = {
  id: "a67453b4-49fe-4bfc-88c4-1496162af0ae",
  name: "Tera  DDS",
};

export const MOCKED_VISITS: Visit[] = [
  {
    id: "b51981ba-67af-4ef0-a497-9bf14d3fafe3",
    description: "Informações sobre a saúde do idoso.",
    date: "2024-06-27T03:00:00.000+00:00" as any,
    elderlyName: "Tera Christiansen DDS",
    visitantName: "Carroll Toy IV",
  },
  {
    id: "d2c8f9f3-5d0a-4a6a-8b77-2f261f2a4c5f",
    description: "Discussão sobre atividades recreativas.",
    date: "2024-07-01T15:30:00.000+00:00",
    elderlyName: "John Doe",
    visitantName: "Jane Smith",
  },
  {
    id: "a3b4c6d7-e8f9-10h1-12i3-14j5k6l7m8n9",
    description: "Planejamento de cuidados a longo prazo.",
    date: "2024-07-03T10:00:00.000+00:00",
    elderlyName: "Alice Johnson",
    visitantName: "Bob Brown",
  },
];

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
