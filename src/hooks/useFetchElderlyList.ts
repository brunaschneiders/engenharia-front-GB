import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Elderly } from "../types";

const fetchElderlyList = async (): Promise<Elderly[]> => {
  const { data } = await axios.get<Elderly[]>(`${BASE_URL}/elderly`);
  return data;
};

const useFetchElderlyList = () => {
  return useQuery<Elderly[], Error>(["elderly"], () => fetchElderlyList());
};

export default useFetchElderlyList;
