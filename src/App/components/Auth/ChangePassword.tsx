import { Box, Button, Typography } from "@mui/material";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logo from "../../../assets/LOGIN.png";
import { useChangePasswordMutation } from "../../Redux/features/Auth/authApi";
import ZForm from "../../utils/ZForm";
import ZTextField from "../../utils/ZTextField";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Changing password...");

    try {
      const res = await changePassword(data);

      if (!res?.data?.success) {
        toast.error(res?.data?.message, { id: toastId });
      } else {
        toast.success("Password changed successfully", { id: toastId });
        navigate("/login");
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
      console.error(err);
    }
  };

  return (
    <Box
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box className="w-full max-w-[600px] p-[40px] space-y-[32px] rounded-xl mx-auto flex flex-col justify-center h-[100vh]">
        <Box className="border-[1px] drop-shadow-[0_0_30px_rgba(0,0,0,0.1)] backdrop-blur-[15px] border-[#424242] rounded-[12px] flex flex-col justify-center gap-[24px] p-[40px] ">
          <Typography
            className=" !mb-[40px] !font-[600] text-center text-[#fff8e1] "
            variant="h4"
          >
            Change Password
          </Typography>

          <ZForm onSubmit={onSubmit}>
            <Box className="!mb-[12px]">
              <Controller
                name="email"
                render={({ field }) => (
                  <ZTextField {...field} label="Email" type="email" />
                )}
              />
            </Box>
            <Box className="!mb-[12px]">
              <Controller
                name="oldPassword"
                render={({ field }) => (
                  <ZTextField {...field} label="Old Password" type="text" />
                )}
              />
            </Box>
            <Box className="!mb-[12px]">
              <Controller
                name="newPassword"
                render={({ field }) => (
                  <ZTextField {...field} label="New Password" type="text" />
                )}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="bg-[#29b6f6]  rounded-sm !text-[14px] !font-[600] hover:bg-[#333333] !mt-[20px]"
            >
              Change Password
            </Button>
          </ZForm>

          <Typography
            sx={{
              fontSize: {
                xs: "12px",
                sm: "14px",
              },
            }}
            className="text-center pt-[24px] text-[#fff8e1]"
          >
            Remembered your password?{" "}
            <Link to="/login" className="underline text-[#29b6f6]">
              Log in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
