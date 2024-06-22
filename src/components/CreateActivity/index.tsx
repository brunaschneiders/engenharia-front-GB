import { useState } from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ActivityForm } from "../ActivityForm";

export const CreateActivity = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        fullWidth
        onClick={handleOpen}
      >
        Cadastrar atividade
      </Button>

      {isOpen && <ActivityForm isOpen={isOpen} handleClose={handleClose} />}
    </>
  );
};
