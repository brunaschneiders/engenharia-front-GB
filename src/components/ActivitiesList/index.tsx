import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Fab,
} from "@mui/material";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";
import { Event } from "../../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Delete, Edit } from "@mui/icons-material";

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
          {event.title}

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
              <Edit />
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
              <Delete />
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

  return (
    events.length > 0 &&
    selectedDate && (
      <Box display="flex" flexDirection="column">
        <p> Data selecionada: {selectedDate?.toLocaleDateString()} </p>
        {events.map((event) =>
          event.date.toDateString() === selectedDate.toDateString() ? (
            <ActivityCard event={event} />
          ) : (
            "Sem atividades para esta data."
          )
        )}
      </Box>
    )
  );
};
