import { ColorRing } from "react-loader-spinner";

import { Box } from "@mui/material";

const LoadingAnimation = () => {
  return (
    <Box className="flex justify-center items-center h-screen">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </Box>
  );
};

export default LoadingAnimation;
