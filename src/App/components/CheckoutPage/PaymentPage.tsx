import { Box, Typography } from "@mui/material";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import img from "../../../assets/payment banner.webp";
import { selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import {
  useGetOrderQuery,
  useMakePaymentMutation,
} from "../../Redux/features/orders/orderApi";
import { useAppSelector } from "../../Redux/hook";
import ZButton from "../../utils/ZButton";
import ZForm from "../../utils/ZForm";
import ZTextField from "../../utils/ZTextField";

const PaymentPage = () => {
  const { orderId } = useParams();

  const { data: orderData } = useGetOrderQuery(orderId);

  const [makePayment, { isLoading }] = useMakePaymentMutation();
  const user = useAppSelector(selectCurrentUser);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const surjoPayload = {
      order_id: orderData?.data._id,
      customer_email: user?.user?.email,
      customer_name: user?.user?.name,
      quantity: orderData?.data.quantity,
      amount: orderData?.data.totalPrice,
      customer_phone: data.contactNo,
      customer_address: data.address,
      customer_city: data.city,
      currency: "BDT",
    };

    const res = await makePayment(surjoPayload);

    if (res.data.success) {
      window.location.href = res.data.data;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "60%" },
          px: {
            xs: 4,
            sm: 0,
          },
          pb: {
            xs: 4,
            lg: 0,
          },
        }}
      >
        <Typography variant="h4" fontWeight={600} mb={1} textAlign="start">
          Payment Details
        </Typography>
        <Typography
          sx={{ fontSize: "18px", color: "#757575" }}
          textAlign="start"
        >
          Complete your purchase by providing your payment details.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "100%", sm: "80%", md: "60%" },
          mt: {
            xs: 0,
            md: 4,
          },
          p: 4,
          border: "1px solid #ddd",
          borderRadius: "12px",
          backgroundColor: "#FFF3E0",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pr: { md: 2 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography textAlign={"center"} fontWeight={500} variant="h5">
              Enter Your Details
            </Typography>
            <ZForm onSubmit={onSubmit}>
              <ZTextField
                label="Customer Number"
                type="number"
                name="contactNo"
              />

              <ZTextField label="City" type="text" name="city" />
              <ZTextField label="Delivery Address" type="text" name="address" />

              <Box
                sx={{
                  my: 4,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* <button>{isLoading ? "Processing..." : "Pay Now"}</button> */}
                <ZButton name={isLoading ? "Processing..." : "Pay Now"} />
              </Box>
            </ZForm>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFF8E1",
            padding: "16px",
            borderRadius: {
              xs: "0",
              lg: "8px",
            },
            boxShadow: {
              xs: "0",
              lg: "0px 4px 6px rgba(0,0,0,0.1)",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              my: {
                xs: 6,
                md: 9,
                lg: 2,
              },
            }}
          >
            <Img
              src={img}
              alt="payment"
              className="w-[400px] rounded-[6px] object-fill"
            />
          </Box>
          <Box sx={{ mr: 6 }}>
            <Typography fontWeight={600} variant="h5" mb={2}>
              Order Summary
            </Typography>
            <Typography sx={{ my: 1, text: "16px", fontWeight: 500 }}>
              Customer Name :{user?.user?.name}
            </Typography>
            <Typography sx={{ my: 1, fontWeight: 500, text: "16px" }}>
              Customer Email :{user?.user?.email}
            </Typography>
            <Typography sx={{ my: 1, fontWeight: 500, text: "16px" }}>
              Order ID :{orderData?.data._id}
            </Typography>
            <Typography sx={{ my: 1, fontWeight: 500, text: "16px" }}>
              Total Items Purchased :{orderData?.data?.quantity} items
            </Typography>
            <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>
              Total Price : ৳ {orderData?.data?.totalPrice}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 4,
          p: 3,
          backgroundColor: "#424242",
          borderRadius: "8px",
          color: "#fff",
          width: { xs: "90%", sm: "60%" },
          display: "flex",
          justifyItems: "start",
          gap: "10px",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <Box>
          <Typography
            textAlign={"left"}
            fontSize="18px"
            fontWeight={600}
            mb={1}
          >
            Why Choose Us?
          </Typography>
          <Typography textAlign={"left"} fontSize="16px">
            ✅ 100% Secure Payment
          </Typography>
          <Typography textAlign={"left"} fontSize="16px">
            ✅ Free Delivery
          </Typography>
          <Typography textAlign={"left"} fontSize="16px">
            ✅ 24/7 Customer Support
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPage;
