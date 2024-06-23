import React from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./Router";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <Router />
      </LocalizationProvider>
    </QueryClientProvider>
  );
};
export default App;
