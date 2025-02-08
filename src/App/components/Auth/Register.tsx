import { FieldValues, SubmitHandler } from "react-hook-form";
import ZForm from "../../utils/ZForm";
import { Button, Box, Typography } from "@mui/material";

import ZTextField from "../../utils/ZTextField";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/LOGIN.png";
import { useRegisterMutation } from "../../Redux/features/Auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating a new account");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("address", data.address);
    formData.append("phone", data.phone);

    if (data.profileImage && data.profileImage instanceof File) {
      formData.append("profileImage", data.profileImage);
    } else {
      return toast.error("Please upload a valid profile image");
    }
    console.log(Object.fromEntries(formData));
    try {
      const res = await register(formData);
      console.log(res);
      if (!res?.data?.success) {
        toast.error(res?.data?.message, { id: toastId });
      } else {
        toast.success("Account created successfully", { id: toastId });
        navigate("/login");
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
      console.log(err);
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
      <ZForm onSubmit={onSubmit}>
        <Box className="w-full max-w-[600px] p-[32px] space-y-[24px] rounded-xl  text-[#fff8e1] mx-auto h-[100vh] flex flex-col justify-center">
          <Box className="border-[1px] drop-shadow-[0_0_30px_rgba(0,0,0,0.1)  ] backdrop-blur-[15px] border-[#424242] rounded-[12px] p-[80px]">
            <Typography
              className="text-[24px] !font-[700] text-center !mb-[72px]"
              variant="h4"
            >
              Register
            </Typography>

            <Box className="space-y-[16px]">
              <Box className="space-y-[8px]">
                <ZTextField name="name" label="Name" type="text" />
              </Box>
              <Box className="space-y-[8px]">
                <ZTextField name="email" label="Email" type="text" />
              </Box>
              <Box className="space-y-[8px]">
                <ZTextField name="password" label="Password" type="text" />
              </Box>
              <Box className="space-y-[8px]">
                <ZTextField name="address" label="Address" type="text" />
              </Box>
              <Box className="space-y-[8px]">
                <ZTextField name="phone" label="Phone Number" type="text" />
              </Box>
              <Box className="space-y-[8px]">
                <ZTextField
                  name="profileImage"
                  label="Profile Image"
                  type="file"
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="bg-[#29b6f6] text-white p-[12px] rounded-sm text-[14px] font-[600] hover:bg-[#333333]"
              >
                Register
              </Button>
            </Box>

            <Typography
              className="text-[8px] text-center pt-[16px]"
              sx={{
                fontSize: {
                  xs: "11px",
                  sm: "14px",
                },
              }}
            >
              Already have an account ?
              <Link to="/login" className="underline text-[#29b6f6]">
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </ZForm>
    </Box>
  );
};

export default Register;
