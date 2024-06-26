import React from "react";
import "react-calendar/dist/Calendar.css";
import { ActivitiesList, CreateActivity, Calendar } from "../components";

import { useCalendar } from "../providers/CalendarProvider/useCalendar";
import { Box, Typography } from "@mui/material";
import { isFamiliar, isNurse } from "../utils";
import { Header, TopBar } from "../components";

import { ElderlyProvider } from "../providers/ElderlyProvider";
import { CalendarProvider } from "../providers/CalendarProvider";
import { CreateVisit } from "../components/CreateVisit";
import { VisitList } from "../components/VisitsList";

const Body = () => {
  const { selectedDate, isLoading } = useCalendar();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <Box
        display="flex"
        gap="24px"
        sx={{ flexDirection: { xs: "column", md: "row" }, mb: "24px" }}
      >
        <Calendar />
        <Box
          display="flex"
          flexDirection="column"
          gap="24px"
          flex="1"
          minWidth="400px"
        >
          <Typography variant="h5" mb="24px">
            Data selecionada: {selectedDate?.toLocaleDateString("pt-BR")}{" "}
          </Typography>

          <ActivitiesList />

          {selectedDate && isNurse() && <CreateActivity />}

          <VisitList />

          {selectedDate && isFamiliar() && <CreateVisit />}
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
