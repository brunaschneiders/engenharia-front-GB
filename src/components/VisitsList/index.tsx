import { Box, Typography } from "@mui/material";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";

import { VisitCard } from "../VisitCard";

export const VisitList = () => {
  const { selectedDate, currentVisits } = useCalendar();

  if (currentVisits.length === 0) return null;

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6" mb="24px" fontWeight="bold">
        Visitas agendadas
      </Typography>
      {selectedDate && currentVisits.length > 0 ? (
        currentVisits.map((visit) => <VisitCard key={visit.id} {...visit} />)
      ) : (
        <Typography> Sem visitas nesta data </Typography>
      )}
    </Box>
  );
};
