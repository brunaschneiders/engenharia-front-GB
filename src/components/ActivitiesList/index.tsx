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
import { Activity } from "../../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import useCheckActivity from "../../hooks/useCheckActivity";

type ActivityCardProps = Activity;

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  name,
  description,
  finished,
}) => {
  const { mutate: checkActivity } = useCheckActivity();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkActivity({ id, finished: e.target.checked });
  };

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
            <Checkbox
              color="primary"
              checked={finished}
              onChange={handleChange}
              onClick={(e) => e.stopPropagation()}
            />
            {name}
          </Box>

          <Box>
            <Fab
              aria-label="add"
              size="small"
              sx={{ background: "transparent", boxShadow: "none" }}
              onClick={(e) => {
                e.stopPropagation();
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
              }}
            >
              <DeleteOutline />
            </Fab>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: "initial" }}>
        {description}
      </AccordionDetails>
    </Accordion>
  );
};

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
