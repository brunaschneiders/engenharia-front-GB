import { useState } from "react";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

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
    <>
      <Button variant="contained" color="primary" startIcon={<Add />} fullWidth>
        Cadastrar atividade
      </Button>
      {/* <h2> Create Event </h2>{" "}
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={handleChange}
      />{" "}
      <button className="create-btn" onClick={handleClick}>
        Click Here to Add Event{" "}
      </button>{" "} */}
    </>
  );
};
