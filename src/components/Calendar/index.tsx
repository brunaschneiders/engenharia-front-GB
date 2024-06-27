import BaseCalendar from "react-calendar";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";

export const Calendar = () => {
  const { selectedDate, activities, visits, handleSelectDate } = useCalendar();

  const getTileClassName = ({ date }: { date: Date }) => {
    const className = [];

    if (selectedDate && date.toDateString() === selectedDate?.toDateString()) {
      className.push("selected");
    }

    if (
      activities.some(
        (activity) => activity.date?.toDateString() === date?.toDateString()
      )
    ) {
      className.push("activity-marked");
    }

    if (
      visits.some(
        (visit) => visit?.date?.toDateString() === date?.toDateString()
      )
    ) {
      className.push("visit-marked");
    }

    return className;
  };

  return (
    <BaseCalendar
      value={selectedDate}
      onClickDay={handleSelectDate}
      tileClassName={getTileClassName}
    />
  );
};
