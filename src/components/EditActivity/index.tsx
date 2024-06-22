import { useState } from "react";
import { Fab } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { ActivityForm } from "../ActivityForm";
import { SubmitHandler } from "react-hook-form";
import { Activity } from "../../types";
import { Snackbar } from "../Snackbar";
import useEditActivity from "../../hooks/useEditActivity";

type EditActivityProps = {
  activity: Activity;
};

export const EditActivity: React.FC<EditActivityProps> = ({ activity }) => {
  const { mutate: editActivity, isLoading } = useEditActivity();

  const [isOpen, setIsOpen] = useState(false);

  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const handleSubmit: SubmitHandler<Activity> = (data) => {
    const { name, description, date } = data;
    editActivity(
      { activityId: activity.id, updates: { name, description, date } },
      {
        onSuccess: () => {
          handleClose();
          setIsSuccessSnackbarOpen(true);
        },
        onError: (error) => {
          console.error(error);
          setIsErrorSnackbarOpen(true);
        },
      }
    );
  };

  return (
    <>
      <Fab
        aria-label="add"
        size="small"
        sx={{ background: "transparent", boxShadow: "none" }}
        onClick={(e) => {
          e.stopPropagation();
          handleOpen();
        }}
      >
        <EditOutlined />
      </Fab>

      {isOpen && (
        <ActivityForm
          isOpen={isOpen}
          handleClose={handleClose}
          isLoading={isLoading}
          onSubmit={handleSubmit}
          mode="edit"
          defaultValues={activity}
        />
      )}

      <Snackbar
        isOpen={isSuccessSnackbarOpen}
        onClose={() => setIsSuccessSnackbarOpen(false)}
        variant="success"
        message="Atividade editada com sucesso"
      />

      <Snackbar
        isOpen={isErrorSnackbarOpen}
        onClose={() => setIsErrorSnackbarOpen(false)}
        variant="error"
        message="Erro ao editar atividade"
      />
    </>
  );
};
