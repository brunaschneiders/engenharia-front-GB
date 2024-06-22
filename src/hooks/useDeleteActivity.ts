import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";

const deleteActivity = async (activityId: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/activity/${activityId}`);
};

const useDeleteActivity = (): UseMutationResult<void, unknown, string> => {
  const queryClient = useQueryClient();

  return useMutation((activityId: string) => deleteActivity(activityId), {
    onSuccess: () => queryClient.invalidateQueries("activities"),
  });
};

export default useDeleteActivity;
