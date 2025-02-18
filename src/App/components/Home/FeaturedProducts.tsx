/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { useGetProductsQuery } from "../../Redux/features/products/productsApi";
import Card from "../../utils/Card";
import LoadingAnimation from "../../utils/LoadingAnimation";

const FeaturedProducts = () => {
  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });
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
        {isLoading || isFetching ? (
          <LoadingAnimation />
        ) : (
          products?.data?.isFeatured?.map((product: any) => (
            <Card key={product._id} product={product} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
