import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisaLogo from "../../../assets/visa-logo.jpg";
import MasterCardLogo from "../../../assets/MasterCard_Logo.svg.png";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("shurjopay");

  const handlePayment = () => {
    // Proceed with Shurjo Pay payment integration logic
    alert("Redirecting to payment gateway...");
    navigate("/order-confirmation"); // Navigate to order confirmation page
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFF8E1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          backgroundColor: "#FFF3E0",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ color: "#424242" }}
          >
            Secure Payment
          </Typography>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <TextField
              fullWidth
              id="card-number"
              label="Card Number"
              variant="outlined"
              placeholder="Enter your card number"
            />
            <div style={{ display: "flex", gap: "16px" }}>
              <TextField
                fullWidth
                id="expiry-date"
                label="Expiry Date"
                variant="outlined"
                placeholder="MM/YY"
              />
              <TextField
                fullWidth
                id="cvv"
                label="CVV"
                variant="outlined"
                placeholder="***"
                type="password"
              />
            </div>

            <FormControl fullWidth variant="outlined">
              <InputLabel>Payment Method</InputLabel>
              <Select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                label="Payment Method"
              >
                <MenuItem value="shurjopay">Shurjo Pay</MenuItem>
                <MenuItem value="visa">Visa</MenuItem>
                <MenuItem value="mastercard">MasterCard</MenuItem>
              </Select>
            </FormControl>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              <img src={VisaLogo} alt="Visa Logo" style={{ height: "40px" }} />
              <img
                src={MasterCardLogo}
                alt="MasterCard Logo"
                style={{ height: "40px" }}
              />
            </div>

            <Button
              onClick={handlePayment}
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#FF7043",
                color: "white",
                marginTop: "16px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#F4511E")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#FF7043")}
            >
              Pay Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPage;
