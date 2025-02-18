/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import { useCreateOrderMutation } from "../../Redux/features/orders/orderApi";
import { useAppSelector } from "../../Redux/hook";

const SubTotal = ({ cartData }: { cartData: any }) => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const Data = cartData || [];
  const calculateSubTotal = () => {
    return Data.reduce((acc: any, item: any) => acc + item?.totalPrice, 0);
  };
  const quantity = Data?.reduce(
    (acc: any, item: any) => acc + item?.products?.quantity,
    0
  );

  const handleMakePayment = async () => {
    const payload = {
      userEmail: user?.user?.email,
      quantity,
      totalPrice: calculateSubTotal(),
    };
    try {
      const res = await createOrder(payload);
      console.log(res);
      if (res.data.success) {
        navigate(`/payment/${res.data.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: "#FFF3E0",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "700", color: "#424242" }}
        >
          Subtotal
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "700", color: "#FF7043" }}
        >
          ৳ {calculateSubTotal().toFixed(2)}
        </Typography>
      </Box>
      <Box sx={{ marginTop: "16px", flexGrow: 1 }} />{" "}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          padding: "16px 0",
          backgroundColor: "#FFF3E0",
          zIndex: "100 !important",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {calculateSubTotal() > 0 ? (
          <button
            onClick={handleMakePayment}
            className="Zbutton Ztype1 Zbtn-txt uppercase font-[14px] fon-[700] w-fit !px-[24px] !py-[12px] !rounded-[6px]"
          >
            {isLoading ? "Processing..." : "Proceed to Payment"}
          </button>
        ) : (
          <Typography className=" uppercase !font-raleway !text-[20px] !font-[700] w-fit !px-[24px] !py-[12px] !rounded-[6px]">
            Add Items to Cart First !
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SubTotal;
