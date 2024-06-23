import React, {
  ReactNode,
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { Elderly } from "../../types";
import useFetchElderlyList from "../../hooks/useFetchElderlyList";
import { isFamiliar } from "../../utils";
import { MOCKED_ELDERLY } from "../../constants";

type ChildrenType = {
  children: ReactNode;
};

export type ElderlyContextType = {
  elderlyList: Elderly[];
  selectedElderly: Elderly | null;
  handleSelectElderly: (id: string) => void;
};

export const ElderlyContext = createContext<ElderlyContextType | undefined>(
  undefined
);

export const ElderlyProvider: React.FC<ChildrenType> = ({ children }) => {
  const { data: elderlyList = [] } = useFetchElderlyList();

  const [selectedElderly, setSelectedElderly] = useState<Elderly | null>(null);

  const handleSelectElderly = useCallback(
    (id: string) => {
      setSelectedElderly(
        elderlyList.find((elderly) => elderly.id === id) || null
      );
    },
    [elderlyList]
  );

  useLayoutEffect(() => {
    if (isFamiliar()) {
      setSelectedElderly(MOCKED_ELDERLY);
    } else if (elderlyList.length > 0) {
      setSelectedElderly(elderlyList[0]);
    }
  }, [elderlyList]);

  const contextValue: ElderlyContextType = useMemo(
    () => ({
      elderlyList,
      selectedElderly,
      handleSelectElderly,
    }),
    [elderlyList, selectedElderly, handleSelectElderly]
  );

  return (
    <ElderlyContext.Provider value={contextValue}>
      {children}
    </ElderlyContext.Provider>
  );
};
