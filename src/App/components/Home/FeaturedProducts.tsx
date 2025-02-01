import { Box, Typography } from "@mui/material";
import Card from "../../utils/Card";

const FeaturedProducts = () => {
  return (
    <Box className="!px-[16px] sm:!px-[32px] !py-[16px] max-w-[1280px] mx-auto">
      <Typography
        variant="h4"
        className="   sm:text-[32px]  !font-[600] !mt-[40px] !mb-[42px] text-center"
      >
        Featured Products
      </Typography>

      <Box className="!mb-[106px]">
        <Card />
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
