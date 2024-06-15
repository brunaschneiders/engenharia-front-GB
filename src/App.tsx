import React from "react";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import { ActivitiesList, CreateActivity, Calendar } from "./components";

import { useCalendar } from "./providers/CalendarProvider/useCalendar";
import { Box } from "@mui/material";

const App: React.FC = () => {
  const { selectedDate } = useCalendar();

  return (
    <div className="app">
      <Box
        display="flex"
        gap="24px"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Calendar />
        <Box display="flex" flexDirection="column">
          <ActivitiesList />
          {selectedDate && <CreateActivity />}
        </Box>
      </Box>
    </div>
  );
};
export default App;
