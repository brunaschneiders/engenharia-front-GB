import React from "react";
import "react-calendar/dist/Calendar.css";
import { ActivitiesList, CreateActivity, Calendar } from "../components";

import { useCalendar } from "../providers/CalendarProvider/useCalendar";
import { Box } from "@mui/material";

export const Home: React.FC = () => {
  const { selectedDate, isLoadingActivities } = useCalendar();

  if (isLoadingActivities) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      display="flex"
      gap="24px"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Calendar />

      <Box display="flex" flexDirection="column" gap="24px" flex="1">
        <ActivitiesList />
        {selectedDate && <CreateActivity />}
      </Box>
    </Box>
  );
};
