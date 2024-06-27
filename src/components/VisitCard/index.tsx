import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Visit } from "../../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
type VisitCardProps = Visit;

export const VisitCard: React.FC<VisitCardProps> = (visit) => {
  const { responsableName, description } = visit;

  const time = `${visit.date.getHours()}:${
    visit.date.getMinutes() === 0 ? "00" : visit.date.getMinutes()
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
          <Box fontSize="18px" display="flex" alignItems="center">
            {responsableName ? (
              <Typography color="textSecondary">
                <b>Responsável:</b> {responsableName}
              </Typography>
            ) : null}
          </Box>

          <Box>
            <Typography mr="18px" display="inline-block" fontSize="18px">
              {time}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: "initial" }}>
        <Typography color="textSecondary">
          <b>Informações adicionais:</b> {description || "Nenhuma"}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
