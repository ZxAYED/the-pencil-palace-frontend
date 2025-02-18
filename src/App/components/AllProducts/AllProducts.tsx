/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { useGetProductsQuery } from "../../Redux/features/products/productsApi";
import Card from "../../utils/Card";
import LoadingAnimation from "../../utils/LoadingAnimation";
import FilterSection from "./FilterSection";

const AllProducts = () => {
  const [page, setPage] = useState(1);
  const [args, setArgs] = useState(null);

  const { data: products, isLoading } = useGetProductsQuery(args, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  console.log(products);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    setArgs((prevArgs: any) => {
      const updatedArgs = prevArgs ? [...prevArgs] : [];
      const filteredArgs = updatedArgs.filter((arg) => arg.name !== "page");

      return [...filteredArgs, { name: "page", value }];
    });
  };

  return (
    <Box sx={{ maxWidth: "1280px", mx: "auto" }}>
      <Box
        sx={{
          display: {
            xs: "block",
            lg: "flex",
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
              lg: "30%",
            },
            position: {
              lg: "sticky",
              xs: "static",
            },

            top: {
              lg: "120px",
              xs: "0px",
            },
            alignSelf: "flex-start",
          }}
        >
          <Typography
            sx={{
              textAlign: {
                sm: "center",
                lg: "left",
              },
            }}
            variant="h4"
            className="text-[#424242] !font-[700]"
          >
            All Products -
          </Typography>
          <Box
            sx={{
              width: {
                xs: "380px",
                sm: "770px",
                md: "942px",
                lg: "350px",
              },
              mx: {
                xs: "auto",
                sm: "auto",
                md: "auto",
                lg: "0px",
              },
              padding: "10px",
              marginTop: "24px",
            }}
          >
            <FilterSection setArgs={setArgs} />
          </Box>
        </Box>
        <Box>
          {isLoading ? (
            <Box
              sx={{
                mt: 3,
                display: "grid",

                placeItems: "center",
              }}
            >
              <LoadingAnimation></LoadingAnimation>
            </Box>
          ) : (
            <Box
              sx={{
                mt: 3,
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
                gap: 2,
                mx: "auto",
                placeItems: "center",
              }}
            >
              {products?.data?.result.length > 0 ? (
                products?.data?.result.map((product: any) => (
                  <Card
                    className="space-y-[32px]"
                    key={product._id}
                    product={product}
                  ></Card>
                ))
              ) : (
                <Box
                  sx={{
                    display: "grid",
                    height: "50dvh",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ textAlign: "center" }}
                    variant="h3"
                  >
                    No products found
                  </Typography>
                </Box>
              )}
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              mb: 10,
            }}
          >
            {products?.data?.result.length > 0 ? (
              <Pagination
                sx={{ mt: 6 }}
                count={Math.ceil(
                  (products?.data?.meta.total || 0) / products?.data?.meta.limit
                )}
                defaultPage={page}
                siblingCount={0}
                boundaryCount={3}
                onChange={handleChange}
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AllProducts;
