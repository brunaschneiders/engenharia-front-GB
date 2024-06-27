import { UseMutationResult, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { BASE_URL } from "../constants";

type Action = "approve" | "reprove";

const validateVisit = async (id: string, action: Action): Promise<void> => {
  await axios.post(`${BASE_URL}/visit/${id}/${action}`);
};

const useValidateVisit = (): UseMutationResult<
  void,
  unknown,
  { id: string; action: Action }
> => {
  const queryClient = useQueryClient();

  return useMutation(({ id, action }) => validateVisit(id, action), {
    onSuccess: () => queryClient.invalidateQueries("visits-waiting-approval"),
  });
};

export default useValidateVisit;
