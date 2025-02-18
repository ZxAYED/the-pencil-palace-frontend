import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SuccessPayment = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        backgroundColor: "#fff8e1",
        padding: "24px",
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Payment Successful!
      </Typography>

      <Typography variant="body1" align="center" paragraph>
        Thank you for your purchase! Your payment has been successfully
        processed.
      </Typography>

      <Button
        variant="contained"
        style={{
          backgroundColor: "#29b6f6",
          color: "white",
          padding: "12px",
          fontWeight: "600",
          fontSize: "14px",
        }}
        onClick={() => navigate("/all-products")}
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default SuccessPayment;
