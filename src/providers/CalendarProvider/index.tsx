import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Activity, Visit } from "../../types";
import useFetchActivities from "../../hooks/useFetchActivities";
import useFetchVisits from "../../hooks/useFetchVisits";

type ChildrenType = {
  children: ReactNode;
};

export type CalendarContextType = {
  selectedDate: Date | null;
  activities: Activity[];
  currentActivities: Activity[];
  visits: Visit[];
  currentVisits: Visit[];
  isLoading: boolean;
  handleSelectDate: (date: Date) => void;
};

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

export const CalendarProvider: React.FC<ChildrenType> = ({ children }) => {
  const { data: activities = [], isLoading: isLoadingActivities } =
    useFetchActivities();
  const { data: visits = [], isLoading: isLoadingVisits } = useFetchVisits();

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

  const currentVisits = useMemo(() => {
    if (selectedDate) {
      return visits.filter(
        (visit) =>
          new Date(visit.date).toDateString() === selectedDate.toDateString()
      );
    }
    return [];
  }, [visits, selectedDate]);

  const handleSelectDate = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const contextValue: CalendarContextType = useMemo(
    () => ({
      selectedDate,
      activities,
      currentActivities,
      visits,
      currentVisits,
      isLoading: isLoadingVisits || isLoadingActivities,
      handleSelectDate,
    }),
    [
      selectedDate,
      activities,
      currentActivities,
      visits,
      currentVisits,
      isLoadingVisits,
      isLoadingActivities,
      handleSelectDate,
    ]
  );

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
