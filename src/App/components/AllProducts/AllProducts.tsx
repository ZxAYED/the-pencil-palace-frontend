import { Box, Pagination, Typography } from "@mui/material";
import Card from "../../utils/Card";
import { useState } from "react";
import FilterSection from "./FilterSection";

const AllProducts = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event: number, value: number) => {
    setPage(value);
    console.log(value);
  };

  return (
    <Box sx={{ maxWidth: "1280px", mx: "auto" }}>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "flex",
          },
          justifyContent: "space-between",
          marginTop: {
            xs: "20px",
            md: "40px",
          },
          gap: "24px",
          mx: {
            xs: "10px",
            md: "0px",
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "30%",
            },
            position: {
              md: "sticky",
              xs: "static",
            },

            top: {
              md: "120px",
              xs: "0px",
            },
            alignSelf: "flex-start",
          }}
        >
          <Typography
            sx={{
              textAlign: {
                sm: "center",
                md: "left",
              },
            }}
            variant="h4"
            className="text-[#424242] !font-[700]"
          >
            All Products -
          </Typography>
          <Box
            sx={{
              border: "2px solid #424242",
              borderRadius: "10px",
              padding: "10px",
              marginTop: "24px",
            }}
          >
            <FilterSection />
          </Box>
        </Box>

        <Box
          className="w-[70%]"
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            },
            gap: 2,
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

      {/* Pagination Section */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default AllProducts;
