import { Box, Typography } from "@mui/material";
import Card from "../../utils/Card";

const FeaturedProducts = () => {
  return (
    <Box className="max-w-[1280px] mx-auto">
      <Typography
        variant="h4"
        className="    !font-[600] !mt-[40px] !mb-[42px] text-center"
      >
        Featured Products
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          mx: {
            xs: "10px",
            sm: "10px",
            md: "10px",
            lg: "10px",
          },
          gap: 2,
        }}
        className=" "
      >
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
