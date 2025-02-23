import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ZButton from "../../utils/ZButton";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#FFF8E1",
      }}
    >
      <Typography variant="h1" fontWeight="bold" color="#FF7043">
        404
      </Typography>
      <Typography variant="h5" color="#424242" mb={2}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" color="#757575" mb={3}>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <ZButton name=" Go Home" onClick={() => navigate("/")}></ZButton>
    </Box>
  );
};

export default ErrorPage;
