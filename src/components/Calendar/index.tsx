import BaseCalendar from "react-calendar";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";

export const Calendar = () => {
  const { selectedDate, activities, visits, handleSelectDate } = useCalendar();

  const getTileClassName = ({ date }: { date: Date }) => {
    if (selectedDate && date.toDateString() === selectedDate?.toDateString()) {
      return "selected";
    }

    if (
      activities.some(
        (activity) => activity.date?.toDateString() === date?.toDateString()
      )
    ) {
      return "activity-marked";
    }

    if (
      visits.some(
        (visit) => visit?.date?.toDateString() === date?.toDateString()
      )
    ) {
      return "activity-marked";
    }

    return "";
  };

  return (
    <BaseCalendar
      value={selectedDate}
      onClickDay={handleSelectDate}
      tileClassName={getTileClassName}
    />
  );
};
