import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import {
  LOGGED_USER_LOCAL_STORAGE_KEY,
  ROUTES,
  USER_NAME,
  USER_TYPE,
} from "../../constants";
import { useHistory } from "react-router-dom";
import { isNurse } from "../../utils";
import { Notifications } from "../Notifications";

export const TopBar: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem(LOGGED_USER_LOCAL_STORAGE_KEY);
    history.push(ROUTES.LOGIN);
  };

  const loggedUser = localStorage.getItem(
    LOGGED_USER_LOCAL_STORAGE_KEY
  ) as USER_TYPE;

  const userName = USER_NAME[loggedUser];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lar de idosos
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
            {userName}
          </Typography>

          {isNurse() && <Notifications />}

          <IconButton color="inherit" onClick={handleLogout}>
            <Logout />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
