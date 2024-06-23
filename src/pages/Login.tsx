import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import {
  LOGGED_USER_LOCAL_STORAGE_KEY,
  ROUTES,
  USER_NAME,
  USER_TYPE,
} from "../constants";
import { useHistory } from "react-router-dom";
import { useCallback, useLayoutEffect } from "react";

const BUTTON_STYLE: SxProps<Theme> = {
  padding: "20px",
  fontSize: "1.5rem",
  margin: "10px",
  width: "240px",
  height: "140px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& > svg": { fontSize: "60px" },
};

export const Login = () => {
  const history = useHistory();
  const isLoggedIn = localStorage.getItem(LOGGED_USER_LOCAL_STORAGE_KEY);

  const goToHome = useCallback(() => history.push(ROUTES.HOME), [history]);

  const handleLogin = (user: USER_TYPE) => {
    localStorage.setItem(LOGGED_USER_LOCAL_STORAGE_KEY, user);
    goToHome();
  };

  const handleNurseLogin = () => handleLogin(USER_TYPE.NURSE);

  const handleFamiliarLogin = () => handleLogin(USER_TYPE.FAMILIAR);

  useLayoutEffect(() => {
    if (isLoggedIn) goToHome();
  }, [goToHome, isLoggedIn]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": { m: 2 },
        }}
      >
        <Button
          variant="contained"
          sx={BUTTON_STYLE}
          onClick={handleNurseLogin}
        >
          <LocalHospitalIcon sx={{ marginBottom: "10px" }} />
          {USER_NAME[USER_TYPE.NURSE]}
        </Button>
        <Button
          variant="contained"
          sx={BUTTON_STYLE}
          onClick={handleFamiliarLogin}
        >
          <PeopleIcon sx={{ marginBottom: "10px" }} />
          {USER_NAME[USER_TYPE.FAMILIAR]}
        </Button>
      </Box>
    </Container>
  );
};
