import {
  Drawer,
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Skeleton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Visit } from "../../types";
import useValidateVisit from "../../hooks/useValidateVisit";

type NotificationsDrawerProps = {
  open: boolean;
  onClose: () => void;
  visitsWaitingApproval: Visit[];
};

const ActionButtons: React.FC<Pick<Visit, "id">> = ({ id }) => {
  const { mutate: validateVisit, isLoading } = useValidateVisit();

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <Skeleton
          variant="rounded"
          width={24}
          height={24}
          sx={{ display: "inline-block", m: "9px" }}
        />
        <Skeleton
          variant="rounded"
          width={24}
          height={24}
          sx={{ display: "inline-block", m: "9px" }}
        />
      </Box>
    );
  }

  return (
    <>
      <IconButton
        color="primary"
        onClick={() => validateVisit({ id, action: "approve" })}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        color="secondary"
        onClick={() => validateVisit({ id, action: "reprove" })}
      >
        <CloseIcon />
      </IconButton>
    </>
  );
};

const VisitisWaitingApprovalList: React.FC<
  Pick<NotificationsDrawerProps, "visitsWaitingApproval">
> = ({ visitsWaitingApproval }) => {
  return (
    <List>
      {visitsWaitingApproval.map(
        ({ id, responsableName, elderlyName, date, description }) => (
          <ListItem key={id}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <CardContent>
                <Typography variant="h6">{elderlyName}</Typography>
                {responsableName ? (
                  <Typography color="textSecondary">
                    <b>Responsável:</b> {responsableName}
                  </Typography>
                ) : null}
                <Typography color="textSecondary">
                  <b>Informações adicionais:</b> {description || "Nenhuma"}
                </Typography>
                <Typography color="textSecondary">
                  <b>Quando:</b>{" "}
                  {new Date(date).toLocaleString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
              </CardContent>
              <div>
                <ActionButtons id={id} />
              </div>
            </Card>
          </ListItem>
        )
      )}
    </List>
  );
};

export const NotificationsDrawer = ({
  open,
  onClose,
  visitsWaitingApproval,
}: NotificationsDrawerProps) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Box sx={{ padding: "24px" }}>
        <h1>Revisar solicitações de visita</h1>
        {visitsWaitingApproval.length > 0 ? (
          <VisitisWaitingApprovalList
            visitsWaitingApproval={visitsWaitingApproval}
          />
        ) : (
          "Nenhuma solicitação de visita pendente"
        )}
      </Box>
    </Drawer>
  );
};
