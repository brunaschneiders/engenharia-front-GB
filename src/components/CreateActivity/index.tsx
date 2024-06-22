import { useState } from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ActivityForm } from "../ActivityForm";
import useCreateActivity from "../../hooks/useCreateActivity";
import { SubmitHandler } from "react-hook-form";
import { Activity } from "../../types";
import { Snackbar } from "../Snackbar";

export const CreateActivity = () => {
  const { mutate: createActivity, isLoading } = useCreateActivity();

  const [isOpen, setIsOpen] = useState(false);

  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const handleSubmit: SubmitHandler<Activity> = (data) => {
    createActivity(data, {
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
        Cadastrar atividade
      </Button>

      {isOpen && (
        <ActivityForm
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
        message="Atividade cadastrada com sucesso"
      />

      <Snackbar
        isOpen={isErrorSnackbarOpen}
        onClose={() => setIsErrorSnackbarOpen(false)}
        variant="error"
        message="Erro ao cadastrar atividade"
      />
    </>
  );
};
