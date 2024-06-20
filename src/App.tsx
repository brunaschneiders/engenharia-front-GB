import React from "react";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import { ActivitiesList, CreateActivity, Calendar } from "./components";

import { useCalendar } from "./providers/CalendarProvider/useCalendar";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import { QueryClient, QueryClientProvider } from "react-query";

const App: React.FC = () => {
  const { selectedDate } = useCalendar();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
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
        </LocalizationProvider>
      </div>
    </QueryClientProvider>
  );
};
export default App;
