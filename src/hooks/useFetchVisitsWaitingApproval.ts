import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Visit } from "../types";

const fetchVisitsWaitingAprroval = async (): Promise<Visit[]> => {
  const { data } = await axios.get<Visit[]>(
    `${BASE_URL}/visit/waiting-approval`
  );
  return data.map((visit) => ({
    ...visit,
    date: new Date(visit.date),
  }));
};

const useFetchVisitsWaitingAprroval = () => {
  return useQuery<Visit[], Error>(["visits-waiting-approval"], () =>
    fetchVisitsWaitingAprroval()
  );
};

export default useFetchVisitsWaitingAprroval;
