import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL, ELDERLY_ID, NURSE_ID } from "../constants";
import { Activity } from "../types";

const fetchActivities = async (): Promise<Activity[]> => {
  const { data } = await axios.get<Activity[]>(
    `${BASE_URL}/nurse/${NURSE_ID}/activities?elderlyId=${ELDERLY_ID}`
  );
  return data.map((activity) => ({
    ...activity,
    date: new Date(activity.date),
  }));
};

const useFetchActivities = () => {
  return useQuery<Activity[], Error>(["activities"], () => fetchActivities());
};

export default useFetchActivities;
