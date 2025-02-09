/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from "@mui/material";
import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";

const ZRatingFieldOptional = ({
  name,
  label,
  type,
  control,
  placeholder,
}: {
  name: string;
  label: string;
  type: string;
  control?: Control<FieldValues, any>;
  placeholder?: string;
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
          type={type}
          variant="standard"
          fullWidth
          placeholder={`${placeholder}  ⭐  `}
          InputProps={{
            inputProps: {
              min: 0,

              max: 5,
              step: 0.1,
            },
          }}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
        />
      )}
    />
  );
};

export default ZRatingFieldOptional;
