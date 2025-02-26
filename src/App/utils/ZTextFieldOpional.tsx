/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from "@mui/material";
import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";

const ZTextFieldOptional = ({
  name,
  label,
  type,
  control,
  placeholder,
  multiline,
  rows,
}: {
  name: string;
  label: string;
  control?: Control<FieldValues, any>;
  placeholder?: string;
  type: string;
  multiline?: boolean;
  rows?: number;
}) => {
  const { control: formControl } = useFormContext();

  return (
    <Controller
      control={control || formControl}
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <TextField
          {...field}
          id={name}
          label={label}
          defaultValue={placeholder}
          type={type}
          variant="standard"
          fullWidth
          multline={multiline}
          rows={rows}
          cols={50}
          placeholder={placeholder || ""}
          value={type === "file" ? value?.fileName : value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (type === "file") {
              const file = e.target.files?.[0];

              onChange(file);
            } else {
              onChange(e.target.value);
            }
          }}
        />
      )}
    />
  );
};

export default ZTextFieldOptional;
