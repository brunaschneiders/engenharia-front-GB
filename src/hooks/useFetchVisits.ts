import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Visit } from "../types";

const fetchVisits = async (): Promise<Visit[]> => {
  const { data } = await axios.get<Visit[]>(`${BASE_URL}/visit`);

  return data.map((visit) => ({
    ...visit,
    date: new Date(visit.date),
  }));
};

const useFetchVisits = () => {
  return useQuery<Visit[], Error>(["visit"], () => fetchVisits());
};

export default useFetchVisits;
