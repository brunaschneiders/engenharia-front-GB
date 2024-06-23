import React from "react";
import "react-calendar/dist/Calendar.css";
import { ActivitiesList, CreateActivity, Calendar } from "../components";

import { useCalendar } from "../providers/CalendarProvider/useCalendar";
import { Box } from "@mui/material";
import { TopBar } from "../components/Topbar";

export const Home: React.FC = () => {
  const { selectedDate, isLoadingActivities } = useCalendar();

  if (isLoadingActivities) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <TopBar />
      <Box
        display="flex"
        gap="24px"
        sx={{ flexDirection: { xs: "column", md: "row" }, margin: "64px" }}
      >
        <Calendar />

        <Box
          display="flex"
          flexDirection="column"
          gap="24px"
          flex="1"
          minWidth="400px"
        >
          <ActivitiesList />
          {selectedDate && <CreateActivity />}
        </Box>
      </Box>
    </>
  );
};
