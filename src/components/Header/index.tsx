import { ElderlySelect } from "../ElderlySelect";
import { useElderly } from "../../providers/ElderlyProvider/useElderly";

import { Box, Typography } from "@mui/material";
import { isNurse } from "../../utils";

export const Header = () => {
  const { selectedElderly } = useElderly();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
      }}
    >
      <Typography variant="h1" fontSize="2rem" fontWeight="bold">
        Agenda de {selectedElderly?.name || "idoso"}
      </Typography>

      {isNurse() && <ElderlySelect />}
    </Box>
  );
};
