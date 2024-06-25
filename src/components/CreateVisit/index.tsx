import { useState } from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { VisitForm } from "../VisitForm";
import useCreateVisit from "../../hooks/useCreateVisit";
import { SubmitHandler } from "react-hook-form";
import { Visit } from "../../types";
import { Snackbar } from "../Snackbar";

export const CreateVisit = () => {
  const { mutate: createVisit, isLoading } = useCreateVisit();

  const [isOpen, setIsOpen] = useState(false);

  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const handleSubmit: SubmitHandler<Visit> = (data) => {
    createVisit(data, {
      onSuccess: () => {
        handleClose();
        setIsSuccessSnackbarOpen(true);
      },
      onError: (error) => {
        console.error(error);
        setIsErrorSnackbarOpen(true);
      },
    });
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        fullWidth
        onClick={handleOpen}
      >
        Solicitar visita
      </Button>

      {isOpen && (
        <VisitForm
          isOpen={isOpen}
          handleClose={handleClose}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
      )}

      <Snackbar
        isOpen={isSuccessSnackbarOpen}
        onClose={() => setIsSuccessSnackbarOpen(false)}
        variant="success"
        message="Visita solicitada com sucesso"
      />

      <Snackbar
        isOpen={isErrorSnackbarOpen}
        onClose={() => setIsErrorSnackbarOpen(false)}
        variant="error"
        message="Erro ao cadastrar solicitação de visita"
      />
    </>
  );
};
