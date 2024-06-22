import { Box, Typography } from "@mui/material";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";

import { ActivityCard } from "../ActivityCard";

export const ActivitiesList = () => {
  const { selectedDate, currentActivities } = useCalendar();

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" mb="24px">
        Data selecionada: {selectedDate?.toLocaleDateString("pt-BR")}{" "}
      </Typography>
      {selectedDate && currentActivities.length > 0 ? (
        currentActivities.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))
      ) : (
        <Typography> Sem atividades nesta data </Typography>
      )}
    </Box>
  );
};
