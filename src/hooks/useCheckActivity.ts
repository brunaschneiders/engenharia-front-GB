import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";

interface FinishActivityPayload {
  finished: boolean;
}

const finishActivity = async (id: string, finished: boolean): Promise<void> => {
  const payload: FinishActivityPayload = { finished };
  await axios.post(`${BASE_URL}/activity/${id}/finish`, payload);
};

const useCheckActivity = (): UseMutationResult<
  void,
  unknown,
  { id: string; finished: boolean }
> => {
  const queryClient = useQueryClient();

  return useMutation(({ id, finished }) => finishActivity(id, finished), {
    onSuccess: () => queryClient.invalidateQueries("activities"),
  });
};

export default useCheckActivity;
