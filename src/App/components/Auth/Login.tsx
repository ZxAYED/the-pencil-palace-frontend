import { FieldValues, SubmitHandler } from "react-hook-form";
import ZForm from "../../utils/ZForm";
import { Button, Box, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import ZTextField from "../../utils/ZTextField";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/LOGIN.png";
import { useLoginMutation } from "../../Redux/features/Auth/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/features/Auth/authSlice";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in");
    try {
      const res = await login(data);

      if (!res?.data?.success) {
        toast.error(res?.data?.message, { id: toastId });
      } else {
        toast.success("Logged in successfully", { id: toastId });
        const responseData = res?.data?.data;
        dispatch(setUser(responseData));
        if (responseData?.user?.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/all-products");
        }
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
          <Box className="border-[1px] drop-shadow-[0_0_30px_rgba(0,0,0,0.1)  ] backdrop-blur-[15px] border-[#424242] rounded-[12px] p-[80px] ">
            <Typography
              className="text-[24px] !font-[700] text-center !mb-[72px]"
              variant="h4"
            >
              Login
            </Typography>

            <Box className="space-y-[16px]">
              <Box className="space-y-[8px]">
                <ZTextField name="email" label="User Email" type="text" />
              </Box>
              <Box className="space-y-[8px]">
                <ZTextField name="password" label="Password" type="text" />
                <Box className="flex justify-end text-[12px] mt-[4px]">
                  <a href="#" className="text-[#29b6f6] underline">
                    Forgot Password?
                  </a>
                </Box>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="bg-[#29b6f6] text-white p-[12px] rounded-sm text-[14px] font-[600] hover:bg-[#333333]"
              >
                Sign in
              </Button>
            </Box>

            <Box className="flex items-center py-[16px] space-x-[8px]">
              <Box className="flex-1 h-[1px] bg-[#e0e0e0]"></Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "11px",
                    sm: "14px",
                  },
                }}
                className="text-[14px]"
              >
                Login with social accounts
              </Typography>
              <Box className="flex-1 h-[1px] bg-[#e0e0e0]"></Box>
            </Box>

            <Box className="flex justify-center space-x-[16px]">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="bg-[#29b6f6] text-white p-[16px] rounded-sm text-[14px] font-[600] hover:bg-[#333333] flex items-center justify-center gap-[8px]"
              >
                <Google className="text-[#29b6f6]" /> Google Sign In
              </Button>
            </Box>

            <Typography
              sx={{
                fontSize: {
                  xs: "11px",
                  sm: "14px",
                },
              }}
              className="text-center pt-[16px]"
            >
              Don&apos;t have an account ?
              <Link to="/register" className="underline text-[#29b6f6]">
                Sign up
              </Link>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  fontSize: {
                    xs: "11px",
                    sm: "14px",
                    color: "#fff8e1",
                  },
                }}
                className="tooltip flex justify-center items-center !mt-[16px] "
              >
                Hover on this for admin login
                <Box className="tooltiptext ">
                  <Box className="!my-[4px]"> Email : Zayed@Iqbal.com </Box>
                  <Box className="!my-[4px]">Pass: Tiberium18</Box>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </ZForm>
    </Box>
  );
};

export default Login;
