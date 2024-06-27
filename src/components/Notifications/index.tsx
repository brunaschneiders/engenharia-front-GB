import { Badge, IconButton } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { useState } from "react";
import { NotificationsDrawer } from "../NotificationsDrawer";
import useFetchVisitsWaitingAprroval from "../../hooks/useFetchVisitsWaitingApproval";

export const Notifications = () => {
  const { data: visitsWaitingApproval } = useFetchVisitsWaitingAprroval();

  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] =
    useState(false);

  const handleOpen = () => {
    setIsNotificationDrawerOpen(true);
  };

  const handleClose = () => {
    setIsNotificationDrawerOpen(false);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge
          badgeContent={visitsWaitingApproval?.length}
          color="secondary"
          sx={{ marginRight: 1 }}
        >
          <NotificationsIcon color="inherit" />
        </Badge>
      </IconButton>
      <NotificationsDrawer
        open={isNotificationDrawerOpen}
        onClose={handleClose}
        visitsWaitingApproval={visitsWaitingApproval || []}
      />
    </>
  );
};
