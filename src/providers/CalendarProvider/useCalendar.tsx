import { useContext } from "react";
import { CalendarContext, CalendarContextType } from ".";

export const useCalendar = (): CalendarContextType => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error("useCalendar must be used within CalendarProvider");
  }

  return context;
};
