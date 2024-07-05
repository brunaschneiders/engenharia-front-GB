import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useElderly } from "../../providers/ElderlyProvider/useElderly";
import { useQueryClient } from "react-query";

export const ElderlySelect: React.FC = () => {
  const { elderlyList, selectedElderly, handleSelectElderly } = useElderly();
  const queryClient = useQueryClient();

  const handleChange = (event: SelectChangeEvent) => {
    queryClient.invalidateQueries(["activities", selectedElderly?.id]);
    handleSelectElderly(event.target.value as string);
  };

  return (
    <FormControl sx={{ minWidth: "400px" }}>
      <InputLabel>Selecione o idoso</InputLabel>
      <Select
        value={selectedElderly?.id || ""}
        label="Selecione o idoso"
        onChange={handleChange}
      >
        {elderlyList?.map((elderly) => (
          <MenuItem key={elderly.id} value={elderly.id}>
            {elderly.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
