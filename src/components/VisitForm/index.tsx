import dayjs from "dayjs";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";

import { DateTimePicker } from "@mui/x-date-pickers";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Visit } from "../../types";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";

type VisitFormProps = {
  isOpen: boolean;
  isLoading: boolean;
  defaultValues?: Visit;
  mode?: "create" | "edit";
  onSubmit: SubmitHandler<Visit>;
  handleClose: () => void;
};

export const VisitForm: React.FC<VisitFormProps> = ({
  isOpen,
  isLoading,
  mode = "create",
  defaultValues,
  onSubmit,
  handleClose,
}) => {
  const { selectedDate } = useCalendar();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<Visit>({
    defaultValues: defaultValues || {
      visitantName: "",
      description: "",
      date: selectedDate ? selectedDate : undefined,
    },
  });

  return (
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
          {mode === "create" ? "Cadastrar" : "Editar"} visita
        </Typography>

        <Controller
          name="visitantName"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome do visitante*"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Informações adicionais*"
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
  );
};
