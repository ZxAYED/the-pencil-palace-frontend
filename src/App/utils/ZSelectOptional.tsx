/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";

const ZSelectOptional = ({
  name,
  label,
  options,
  control,
}: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  control?: Control<FieldValues, any>;
}) => {
  const { control: formControl } = useFormContext();

  return (
    <FormControl fullWidth required variant="standard">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        control={control || formControl}
        name={name}
        render={({ field: { onChange, value, ...field } }) => (
          <Select
            {...field}
            labelId={`${name}`}
            id={name}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            label={label}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default ZSelectOptional;
