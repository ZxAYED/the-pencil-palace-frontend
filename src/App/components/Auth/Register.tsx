import { FieldValues, SubmitHandler } from "react-hook-form";
import ZForm from "../../utils/ZForm";
import { Button, Box, Typography, Input } from "@mui/material";

import ZTextField from "../../utils/ZTextField";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../assets/LOGIN.png";

const Register = () => {
  const { reset } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
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
                <Input name="profileImage" type="file" />
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

            <Typography className="text-[8px] text-center pt-[16px]">
              Already have an account?
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
