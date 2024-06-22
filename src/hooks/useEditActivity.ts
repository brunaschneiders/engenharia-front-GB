import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Activity } from "../types";

interface EditActivityData {
  activityId: string;
  updates: Partial<Activity>;
}

const editActivity = async ({
  activityId,
  updates,
}: EditActivityData): Promise<void> => {
  const url = `${BASE_URL}/activity/${activityId}`;
  await axios.patch(url, updates);
};

const useEditActivity = (): UseMutationResult<
  void,
  unknown,
  EditActivityData
> => {
  const queryClient = useQueryClient();
  return useMutation(editActivity, {
    onSuccess: () => queryClient.invalidateQueries("activities"),
  });
};

export default useEditActivity;
