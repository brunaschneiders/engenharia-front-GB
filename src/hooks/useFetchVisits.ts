import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Visit } from "../types";
import { useElderly } from "../providers/ElderlyProvider/useElderly";

const fetchVisits = async (): Promise<Visit[]> => {
  const { data } = await axios.get<Visit[]>(`${BASE_URL}/visit`);

  return data.map((visit) => ({
    ...visit,
    date: new Date(visit.date),
  }));
};

const useFetchVisits = () => {
  const { selectedElderly } = useElderly();

  return useQuery<Visit[], Error>(["visit"], () => fetchVisits(), {
    select: (data) =>
      data.filter((visit) => visit.elderlyId === selectedElderly?.id),
  });
};

export default useFetchVisits;
