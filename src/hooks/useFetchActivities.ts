import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL, MOCKED_NURSE_ID } from "../constants";
import { Activity } from "../types";
import { useElderly } from "../providers/ElderlyProvider/useElderly";

const fetchActivities = async (elderlyId: string): Promise<Activity[]> => {
  const { data } = await axios.get<Activity[]>(
    `${BASE_URL}/nurse/${MOCKED_NURSE_ID}/activities?elderlyId=${elderlyId}`
  );
  return data.map((activity) => ({
    ...activity,
    date: new Date(activity.date),
  }));
};

const useFetchActivities = () => {
  const { selectedElderly } = useElderly();

  return useQuery<Activity[], Error>(
    ["activities"],
    () => fetchActivities(selectedElderly?.id ?? ""),
    { enabled: !!selectedElderly?.id }
  );
};

export default useFetchActivities;
