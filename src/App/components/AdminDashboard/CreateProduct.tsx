import { Button } from "@mui/material";
import ZTextField from "../../utils/ZTextField";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const CreateProduct = () => {
  return (
    <div>
      <div className="min-h-screen">
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
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default CreateProduct;
