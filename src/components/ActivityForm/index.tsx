import dayjs from "dayjs";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";

import { DateTimePicker } from "@mui/x-date-pickers";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Activity } from "../../types";
import { useCalendar } from "../../providers/CalendarProvider/useCalendar";

type ActivityFormProps = {
  isOpen: boolean;
  isLoading: boolean;
  defaultValues?: Activity;
  mode?: "create" | "edit";
  onSubmit: SubmitHandler<Activity>;
  handleClose: () => void;
};

export const ActivityForm: React.FC<ActivityFormProps> = ({
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
  } = useForm<Activity>({
    defaultValues: defaultValues || {
      name: "",
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
          {mode === "create" ? "Cadastrar" : "Editar"} atividade
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
  );
};
