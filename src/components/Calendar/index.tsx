import BaseCalendar from "react-calendar";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";

import "./Calendar.css";

export const Calendar = () => {
  const { selectedDate, events, handleSelectDate } = useCalendar();

  return (
    <BaseCalendar
      value={selectedDate}
      onClickDay={handleSelectDate}
      tileClassName={({ date }) =>
        selectedDate && date.toDateString() === selectedDate?.toDateString()
          ? "selected"
          : events.some(
              (event) => event.date.toDateString() === date.toDateString()
            )
          ? "event-marked"
          : ""
      }
    />
  );
};
