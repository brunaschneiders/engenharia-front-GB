import { useState } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import useCreateActivity from "../../hooks/useCreateActivity";
import { Activity } from "../../types";
import dayjs from "dayjs";
import { Snackbar } from "../Snackbar";

type FormValues = Activity;

export const CreateActivity = () => {
  const { mutate: createActivity, isLoading } = useCreateActivity();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    createActivity(data, {
      onSuccess: () => {
        reset();
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

      <Dialog open={isOpen} onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          gap="16px"
          padding="64px"
          minWidth={600}
        >
          <Typography variant="h3" fontSize="24px" fontWeight="bold" mb="16px">
            Cadastrar Atividade
          </Typography>

          <Controller
            name="name"
            control={control}
            rules={{ required: "Campo obrigatório" }}
            render={({ field }) => (
              <TextField {...field} label="Nome" variant="outlined" />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: "Campo obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Descrição"
                variant="outlined"
                multiline
                rows={4}
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            rules={{ required: "Campo obrigatório" }}
            render={({ field }) => (
              <DateTimePicker
                {...field}
                ampm={false}
                value={field.value ? dayjs(field.value) : null}
                onChange={(value) => field.onChange(value?.toDate())}
                minDate={dayjs().startOf("hour")}
              />
            )}
          />

          <Box display="flex" justifyContent="flex-end" gap="12px" mt="24px">
            <Button
              variant="outlined"
              size="large"
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={!isValid || isLoading}
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Dialog>

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
