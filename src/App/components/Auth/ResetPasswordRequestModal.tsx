import { Box, Drawer, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { useResetPassReqMutation } from "../../Redux/features/Auth/authApi";
import ZButton from "../../utils/ZButton";

const ResetPasswordRequestModal = () => {
  const [open, setOpen] = useState(false);
  const [resetPassReq] = useResetPassReqMutation();
  const { handleSubmit, control } = useForm();

  const handleToggleDrawer = (state: boolean) => setOpen(state);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Submitting password reset request...");

    try {
      const res = await resetPassReq(data).unwrap();

      if (res.success) {
        toast.success(
          "Password reset link sent to your email. Check your inbox or spam folder.",
          { id: toastId }
        );
      }

      handleToggleDrawer(false);
    } catch (err) {
      toast.error("Failed to submit request.", { id: toastId });
      console.error(err);
    }
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        onClick={() => handleToggleDrawer(true)}
        sx={{ textDecoration: "underline", cursor: "pointer" }}
      >
        Forgot password?
      </Box>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => handleToggleDrawer(false)}
      >
        <Box
          sx={{
            width: { xs: "300px", md: "400px" },
            my: "100px",
            padding: "32px",
            backgroundColor: "#FFF3E0",
          }}
        >
          <Typography variant="h4" color="#424242" textAlign="center" mb={2}>
            Reset Password
          </Typography>

          <Typography color="GrayText" variant="h6" textAlign="center" mb={3}>
            Please enter your email address to reset your password.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="email"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  sx={{ mb: 3 }}
                  InputProps={{
                    sx: {
                      color: "#424242",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#757575",
                    },
                  }}
                />
              )}
            />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ZButton name="Submit" />
            </Box>
          </form>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ResetPasswordRequestModal;
