import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";

const checkActivity = async (
  id: string,
  isFinished: boolean
): Promise<void> => {
  await axios.post(`${BASE_URL}/activity/${id}/change-status`, undefined, {
    params: { isFinished },
  });
};

const useCheckActivity = (): UseMutationResult<
  void,
  unknown,
  { id: string; isFinished: boolean }
> => {
  const queryClient = useQueryClient();

  return useMutation(({ id, isFinished }) => checkActivity(id, isFinished), {
    onSuccess: () => queryClient.invalidateQueries("activities"),
  });
};

export default useCheckActivity;
