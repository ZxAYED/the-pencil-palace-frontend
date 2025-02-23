import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Box,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import bg from "../../../assets/paymentResponseBg.png";
import { selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import {
  useGetSingleOrderOfUserQuery,
  useVerifyPaymentQuery,
} from "../../Redux/features/orders/orderApi";
import { useAppSelector } from "../../Redux/hook";
import ZButton from "../../utils/ZButton";

const PaymentResponse = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  const user = useAppSelector(selectCurrentUser);

  const { data: orderInfo, isLoading, error } = useVerifyPaymentQuery(orderId);

  const orderData = orderInfo?.data[0] || [];
  const { data: productInfo } = useGetSingleOrderOfUserQuery(orderId);
  const productData = productInfo?.data || [];

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        pt: 2,
        pb: 20,
      }}
    >
      <Box
        sx={{
          // bgcolor: "rgba(41, 182, 246, 0.2)",
          bgcolor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          padding: { xs: "20px", md: "32px" },
          maxWidth: "800px",
          margin: "auto",
          borderRadius: "12px",
          textAlign: "center",

          mt: { xs: 3, md: 5 },
        }}
      >
        {isLoading ? (
          <CircularProgress sx={{ color: "#FF7043", my: 5 }} />
        ) : error || !orderData ? (
          <>
            <ErrorOutlineIcon sx={{ fontSize: 50, color: "#D32F2F", mb: 1 }} />
            <Typography variant="h5" fontWeight="bold" color="#D32F2F">
              Payment Failed
            </Typography>
            <ZButton
              name="Retry Payment"
              onClick={() => navigate("/all-products")}
            />
          </>
        ) : (
          <>
            <Typography variant="h4" fontWeight="bold" color="#424242" my={4}>
              The Pencil Palace- Verify Payment
            </Typography>
            {orderData.bank_status === "success" ? (
              <>
                <CheckCircleOutlineIcon
                  sx={{ fontSize: 50, color: "#7CB342", mb: 1 }}
                />
                <Typography variant="h5" fontWeight="bold" color="#7CB342">
                  Payment Successful!
                </Typography>
              </>
            ) : (
              <>
                <ErrorOutlineIcon
                  sx={{ fontSize: 50, color: "#D32F2F", mb: 1 }}
                />
                <Typography variant="h5" fontWeight="bold" color="#D32F2F">
                  Payment Pending
                </Typography>
              </>
            )}

            <Typography variant="h6" fontWeight="bold" mt={3}>
              <ReceiptIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Payment
              Details
            </Typography>
            <Divider sx={{ my: 2 }} />
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {[
                    ["Invoice No", orderData?.order_id],
                    ["Payment Method", orderData?.method],
                    ["Amount Paid", orderData?.amount],
                    ["Status", orderData?.sp_message],
                    ["Customer Name", orderData?.name],
                    ["Customer Contact No", orderData?.phone_no],
                    ["Customer Location", orderData?.address],

                    ["Card Holder Name", orderData?.card_holder_name],
                    ["Card No", orderData?.card_number],
                  ].map(([label, value]) => (
                    <TableRow key={label}>
                      <TableCell>{label}</TableCell>
                      <TableCell align="left">{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h6" fontWeight="bold" mt={3}>
              <LocationOnIcon sx={{ verticalAlign: "middle", mr: 1 }} /> User
              Information
            </Typography>
            <Divider sx={{ my: 2 }} />
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {[
                    ["Name", user?.user?.name],
                    ["Email", user?.user?.email],
                    ["Address", user?.user?.address],
                  ].map(([label, value]) => (
                    <TableRow key={label}>
                      <TableCell>{label}</TableCell>
                      <TableCell align="left">{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h6" fontWeight="bold" mt={3}>
              <ShoppingBagIcon sx={{ verticalAlign: "middle", mr: 1 }} />{" "}
              Product Details
            </Typography>
            <Divider sx={{ my: 2 }} />
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {[
                    ["Quantity", productData?.quantity],
                    ["Total Price", `৳${productData?.totalPrice}`],
                  ].map(([label, value]) => (
                    <TableRow key={label}>
                      <TableCell>{label}</TableCell>
                      <TableCell align="left">{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Stack
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              mt={3}
            >
              <ZButton
                name="View Order"
                onClick={() => navigate(`/user/dashboard`)}
              />
              <ZButton
                name="Continue Shopping"
                onClick={() => navigate("/all-products")}
              />
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
};

export default PaymentResponse;
