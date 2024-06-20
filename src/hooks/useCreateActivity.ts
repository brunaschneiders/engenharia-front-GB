import { useMutation } from "react-query";
import axios from "axios";
import { Activity } from "../types";
import { BASE_URL, ELDERLY_ID, NURSE_ID } from "../constants";

const useCreateActivity = () => {
  return useMutation((activityData: Activity) => {
    return axios.post(`${BASE_URL}/activity`, {
      ...activityData,
      elderlyId: ELDERLY_ID,
      nurseId: NURSE_ID,
    });
  });
};

export default useCreateActivity;
