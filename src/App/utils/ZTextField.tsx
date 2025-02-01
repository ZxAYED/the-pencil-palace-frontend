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
      render={({ field }) => (
        <TextField
          className=" "
          {...field}
          id={name}
          label={label}
          type={type}
          variant="standard"
          fullWidth
        />
      )}
    />
  );
};

export default ZTextField;
