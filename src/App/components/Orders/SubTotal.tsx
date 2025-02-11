import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface CartItem {
  total: number;
}

interface SubTotalProps {
  cartData: CartItem[];
}

const SubTotal = ({ cartData }: SubTotalProps) => {
  const calculateSubTotal = () => {
    if (!cartData || cartData.length === 0) return 0;
    return cartData.reduce((acc, item) => acc + item.total, 0);
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
          <Link to="/payment">
            <button className="Zbutton Ztype1 Zbtn-txt uppercase font-[14px] fon-[700] w-fit !px-[24px] !py-[12px] !rounded-[6px]">
              Proceed to Payment
            </button>
          </Link>
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
