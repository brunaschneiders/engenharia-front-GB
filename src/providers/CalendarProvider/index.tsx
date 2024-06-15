import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Event } from "../../types";

type ChildrenType = {
  children: ReactNode;
};

export type CalendarContextType = {
  selectedDate: Date | null;
  events: Event[];
  handleSelectDate: (date: Date) => void;
  handleUpdateEvent: (eventId: number, newName: string) => void;
  handleDeleteEvent: (eventId: number) => void;
  handleCreateEvent: (eventName: string) => void;
};

export const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

export const CalendarProvider: React.FC<ChildrenType> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const handleSelectDate = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const handleUpdateEvent = useCallback(
    (eventId: number, newName: string) => {
      const updated_Events = events.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            title: newName,
          };
        }
        return event;
      });
      setEvents(updated_Events);
    },
    [events]
  );

  const handleDeleteEvent = useCallback(
    (eventId: number) => {
      const updated_Events = events.filter((event) => event.id !== eventId);
      setEvents(updated_Events);
    },
    [events]
  );

  const handleCreateEvent = useCallback(
    (eventName: string) => {
      if (selectedDate && eventName) {
        const newEvent: Event = {
          id: new Date().getTime(),
          date: selectedDate,
          title: eventName,
        };
        setEvents([...events, newEvent]);
        setSelectedDate(null);
        setSelectedDate(newEvent.date);
      }
    },
    [events, selectedDate]
  );

  const contextValue: CalendarContextType = useMemo(
    () => ({
      selectedDate,
      events,
      handleSelectDate,
      handleUpdateEvent,
      handleDeleteEvent,
      handleCreateEvent,
    }),
    [
      selectedDate,
      events,
      handleSelectDate,
      handleUpdateEvent,
      handleDeleteEvent,
      handleCreateEvent,
    ]
  );

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
