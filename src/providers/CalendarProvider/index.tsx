import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Activity } from "../../types";
import useFetchActivities from "../../hooks/useFetchActivities";

type ChildrenType = {
  children: ReactNode;
};

export type CalendarContextType = {
  selectedDate: Date | null;
  activities: Activity[];
  currentActivities: Activity[];
  isLoadingActivities: boolean;
  handleSelectDate: (date: Date) => void;
};

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

export const CalendarProvider: React.FC<ChildrenType> = ({ children }) => {
  const { data: activities = [], isLoading } = useFetchActivities();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const currentActivities = useMemo(() => {
    if (selectedDate) {
      return activities.filter(
        (activity) =>
          new Date(activity.date).toDateString() === selectedDate.toDateString()
      );
    }
    return [];
  }, [activities, selectedDate]);

  const handleSelectDate = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const contextValue: CalendarContextType = useMemo(
    () => ({
      selectedDate,
      activities,
      currentActivities,
      isLoadingActivities: isLoading,
      handleSelectDate,
    }),
    [selectedDate, activities, currentActivities, isLoading, handleSelectDate]
  );

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
