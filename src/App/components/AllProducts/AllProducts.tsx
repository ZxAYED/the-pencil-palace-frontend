import { Box, Typography } from "@mui/material";
import Card from "../../utils/Card";

const AllProducts = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1280px", mx: "auto", my: "24px" }}>
        <Typography variant="h4" className="text-[#424242] !font-[700] ">
          All Products -
        </Typography>
        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Box>
      </Box>
    </>
  );
};

export default AllProducts;
