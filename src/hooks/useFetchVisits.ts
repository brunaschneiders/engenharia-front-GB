import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL, MOCKED_VISITS } from "../constants";
import { Visit } from "../types";

const fetchVisits = async (): Promise<Visit[]> => {
  // const { data } = await axios.get<Visit[]>(`${BASE_URL}/visits`);
  // TODO: Remove this line after implementing the API call
  return Promise.resolve(
    MOCKED_VISITS.map((visit) => ({
      ...visit,
      date: new Date(visit.date),
    }))
  );

  // return data.map((visit) => ({
  //   ...visit,
  //   date: new Date(visit.date),
  // }));
};

const useFetchVisits = () => {
  return useQuery<Visit[], Error>(["visits"], () => fetchVisits());
};

export default useFetchVisits;
