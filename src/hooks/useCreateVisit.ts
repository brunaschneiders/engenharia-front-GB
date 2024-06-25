import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Visit } from "../types";
import { BASE_URL, MOCKED_NURSE_ID } from "../constants";
import { useElderly } from "../providers/ElderlyProvider/useElderly";

const useCreateVisit = () => {
  const queryClient = useQueryClient();
  const { selectedElderly } = useElderly();

  return useMutation(
    (visitData: Visit) => {
      return axios.post(`${BASE_URL}/visit`, {
        ...visitData,
        elderlyId: selectedElderly?.id,
        responsableId: MOCKED_NURSE_ID,
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries("activities"),
    }
  );
};

export default useCreateVisit;
