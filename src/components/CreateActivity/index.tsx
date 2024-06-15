import { useState } from "react";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";

export const CreateActivity = () => {
  const { handleCreateEvent } = useCalendar();
  const [eventName, setEventName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const handleClick = () => {
    handleCreateEvent(eventName);
    setEventName("");
  };

  return (
    <div className="event-form">
      <h2> Create Event </h2>{" "}
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={handleChange}
      />{" "}
      <button className="create-btn" onClick={handleClick}>
        Click Here to Add Event{" "}
      </button>{" "}
    </div>
  );
};
