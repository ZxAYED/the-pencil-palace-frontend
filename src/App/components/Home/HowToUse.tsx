import { Box, Typography } from "@mui/material";
import img from "../../../assets/howtoUse.png";
import {
  AddShoppingCart,
  LocalShipping,
  Payment,
  Search,
} from "@mui/icons-material";
const HowToUse = () => {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        margin: "120px auto",
        marginBottom: "180px",
      }}
    >
      <Typography className="text-center !mb-[48px] !font-[600]" variant="h4">
        How to Use Our Stationery Shop Website
      </Typography>
      <Box
        sx={{
          mx: {
            sm: "0px",
            lg: "0px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
          }}
        >
          <Box
            sx={{
              marginRight: {
                md: "0px",
                lg: "120px",
              },

              width: {
                xs: "100%",
                lg: "40%",
              },
            }}
            className="  flex-1 flex flex-col gap-[16px] justify-center  w-[40%]"
          >
            <Typography variant="h6" className="!font-[600]">
              <Search /> Explore Our Collection
            </Typography>

            <Typography>
              Discover a wide range of stationery items on the "All Products"
              page. From pencils to creative supplies, we've got everything for
              your workspace.
            </Typography>

            <Typography variant="h6" className="!font-[600]">
              <AddShoppingCart /> Select and Add to Cart
            </Typography>
            <Typography>
              Click on your favorite items to view details. Add them to your
              cart with just one click to prepare for checkout.
            </Typography>

            <Typography variant="h6" className="!font-[600]">
              <Payment /> Smooth and Secure Checkout
            </Typography>
            <Typography>
              Proceed to the purchase page, fill out the order form, and
              complete your payment securely to confirm your order.
            </Typography>

            <Typography variant="h6" className="!font-[600]">
              <LocalShipping></LocalShipping> Order Confirmation & Delivery
            </Typography>
            <Typography>
              Once your payment is accepted, our team processes your order and
              ensures swift delivery to your doorstep. Enjoy your new
              stationery!
            </Typography>
          </Box>
          <Box
            sx={{
              my: {
                xs: "24px",
                xl: "0px",
              },
            }}
            className=" w-[40%]"
          >
            <img
              src={img}
              alt="3D Model"
              className="w-full h-[40vh] flex-1 object-cover"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowToUse;
