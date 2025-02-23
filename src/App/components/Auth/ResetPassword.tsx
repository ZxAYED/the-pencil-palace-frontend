import { Box, Button, TextField, Typography } from "@mui/material";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useResetPasswordMutation } from "../../Redux/features/Auth/authApi";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { handleSubmit, control } = useForm();
  const [resetPassword] = useResetPasswordMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = {
      token,
      newPassword: data.password,
    };
    try {
      await resetPassword(payload).unwrap();

      toast.success("Password reset successful!");
    } catch (err) {
      toast.error("Failed to reset password.");
      console.error(err);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Reset Your Password</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: "Password is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="New Password"
              type="password"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ mt: 2 }}
            />
          )}
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Reset Password
        </Button>
      </form>
    </Box>
  );
};

export default ResetPassword;
