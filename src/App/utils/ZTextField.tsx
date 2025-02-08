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
          value={value?.fileName}
          onChange={(e) => {
            if (type === "file") {
              onChange(e.target.files?.[0]);
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
