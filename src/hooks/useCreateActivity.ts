import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Activity } from "../types";
import { BASE_URL, MOCKED_NURSE_ID } from "../constants";
import { useElderly } from "../providers/ElderlyProvider/useElderly";

const useCreateActivity = () => {
  const queryClient = useQueryClient();
  const { selectedElderly } = useElderly();

  return useMutation(
    (activityData: Activity) => {
      return axios.post(`${BASE_URL}/activity`, {
        ...activityData,
        elderlyId: selectedElderly?.id,
        nurseId: MOCKED_NURSE_ID,
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries("activities"),
    }
  );
};

export default useCreateActivity;
