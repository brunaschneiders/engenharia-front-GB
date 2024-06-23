import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Fab,
  Typography,
} from "@mui/material";
import { Activity } from "../../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DeleteOutline } from "@mui/icons-material";
import useCheckActivity from "../../hooks/useCheckActivity";
import useDeleteActivity from "../../hooks/useDeleteActivity";
import { EditActivity } from "../EditActivity";
import { isNurse } from "../../utils";

type ActivityCardProps = Activity;

const ActionButtons: React.FC<ActivityCardProps> = (activity) => {
  const { id } = activity;

  const { mutate: deleteActivity } = useDeleteActivity();

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    deleteActivity(id);
  };

  return (
    <>
      <EditActivity activity={activity} />

      <Fab
        aria-label="add"
        size="small"
        sx={{ background: "transparent", boxShadow: "none" }}
        onClick={handleDelete}
      >
        <DeleteOutline />
      </Fab>
    </>
  );
};

const CheckActivity: React.FC<ActivityCardProps> = (activity) => {
  const { id, finished } = activity;

  const { mutate: checkActivity } = useCheckActivity();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkActivity({ id, finished: e.target.checked });
  };

  return (
    <Checkbox
      color="primary"
      checked={finished}
      onChange={handleChange}
      onClick={(e) => e.stopPropagation()}
      disabled={!isNurse()}
    />
  );
};

export const ActivityCard: React.FC<ActivityCardProps> = (activity) => {
  const { name, description } = activity;

  const time = `${activity.date.getHours()}:${
    activity.date.getMinutes() === 0 ? "00" : activity.date.getMinutes()
  }`;

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
          <Box fontSize="18px">
            <CheckActivity {...activity} />
            {name}
          </Box>

          <Box>
            <Typography mr="18px" display="inline-block" fontSize="18px">
              {time}
            </Typography>

            {isNurse() && <ActionButtons {...activity} />}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: "initial" }}>
        {description}
      </AccordionDetails>
    </Accordion>
  );
};
