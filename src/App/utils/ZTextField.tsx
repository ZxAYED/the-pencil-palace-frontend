import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const ZTextField = ({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <TextField
          {...field}
          id={name}
          label={label}
          type={type}
          variant="standard"
          fullWidth
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

export default ZTextField;
