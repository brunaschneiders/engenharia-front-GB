import React from "react";
import "react-calendar/dist/Calendar.css";
import { ActivitiesList, CreateActivity, Calendar } from "../components";

import { useCalendar } from "../providers/CalendarProvider/useCalendar";
import { Box } from "@mui/material";
import { TopBar } from "../components/Topbar";
import { isNurse } from "../utils";
import { Header } from "../components/Header";

import { ElderlyProvider } from "../providers/ElderlyProvider";
import { CalendarProvider } from "../providers/CalendarProvider";

const Body = () => {
  const { selectedDate, isLoadingActivities } = useCalendar();

  if (isLoadingActivities) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <Box
        display="flex"
        gap="24px"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
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
          {selectedDate && isNurse() && <CreateActivity />}
        </Box>
      </Box>
    </>
  );
};

export const Home: React.FC = () => {
  return (
    <ElderlyProvider>
      <CalendarProvider>
        <TopBar />
        <Box
          sx={{
            margin: "64px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Body />
        </Box>
      </CalendarProvider>
    </ElderlyProvider>
  );
};
