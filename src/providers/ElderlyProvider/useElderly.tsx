import { useContext } from "react";
import { ElderlyContext, ElderlyContextType } from ".";

export const useElderly = (): ElderlyContextType => {
  const context = useContext(ElderlyContext);

  if (!context) {
    throw new Error("useElderly must be used within ElderlyProvider");
  }

  return context;
};
