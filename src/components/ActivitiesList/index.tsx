import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Fab,
  Typography,
} from "@mui/material";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";
import { Event } from "../../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

type ActivityCardProps = {
  event: Event;
};

const ActivityCard: React.FC<ActivityCardProps> = ({ event }) => {
  const { handleUpdateEvent, handleDeleteEvent } = useCalendar();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
          display="flex"
          width="fill-available"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Checkbox color="primary" />
            {event.title}
          </Box>

          <Box>
            <Fab
              aria-label="add"
              size="small"
              sx={{ background: "transparent", boxShadow: "none" }}
              onClick={(e) => {
                e.stopPropagation();
                handleUpdateEvent(event.id, prompt("ENTER NEW TITLE") || "");
              }}
            >
              <EditOutlined />
            </Fab>

            <Fab
              aria-label="add"
              size="small"
              sx={{ background: "transparent", boxShadow: "none" }}
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteEvent(event.id);
              }}
            >
              <DeleteOutline />
            </Fab>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};

export const ActivitiesList = () => {
  const { selectedDate, events } = useCalendar();

  const currentActivities = events.filter(
    (event) => event.date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" mb="24px">
        Data selecionada: {selectedDate?.toLocaleDateString()}{" "}
      </Typography>
      {selectedDate && currentActivities.length > 0 ? (
        currentActivities.map((event) => (
          <ActivityCard key={event.id} event={event} />
        ))
      ) : (
        <Typography> Sem atividades nesta data </Typography>
      )}
    </Box>
  );
};
