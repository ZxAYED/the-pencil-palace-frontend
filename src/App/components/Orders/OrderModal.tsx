/* eslint-disable @typescript-eslint/no-explicit-any */
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useState, Fragment, useEffect } from "react";

import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
import OrderCard from "./OrderCard";
import { useGetCartItemsQuery } from "../../Redux/features/orders/orderApi";
import { useAppSelector } from "../../Redux/hook";
import { selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import LoadingAnimation from "../../utils/LoadingAnimation";
import SubTotal from "./SubTotal";

export default function OrderModal() {
  const user = useAppSelector(selectCurrentUser);
  const {
    data: productData,
    isLoading,
    isFetching,
    refetch,
  } = useGetCartItemsQuery(user?.user?.email);
  const [open, setOpen] = useState(false);
  const data = productData || [];
  const [count, setCount] = useState<number>(0);

  const anchor = "right";
  useEffect(() => {
    setCount(data?.data?.length);
  }, [data?.data?.length]);

  if (isFetching || isLoading) return <LoadingAnimation />;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "flex",
        },
        justifyContent: {
          xs: "center",
          sm: "flex-start",
        },
        alignItems: {
          xs: "center",
          md: "flex-start",
        },
        marginLeft: {
          xs: "20px",
          md: "0px",
        },
      }}
    >
      <IconButton onClick={handleClickOpen}>
        <ShoppingCartIcon fontSize="medium" />
        <CartBadge badgeContent={count} color="primary" overlap="circular" />
      </IconButton>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Fragment key={anchor}>
          <Drawer anchor={anchor} open={open} onClose={handleClose}>
            <Box sx={{ p: "24px" }}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  borderBottom: "2px solid #424242",
                  pb: "24px",
                }}
              >
                Your Cart
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  width: {
                    xs: "300px",
                    sm: "550px",
                    md: "700px",
                  },
                  mt: "40px",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "120px",
                }}
              >
                {data?.data?.length > 0 ? (
                  data?.data?.map((item: any) => (
                    <Box key={item._id}>
                      <OrderCard item={item} refetch={refetch} />
                      <Divider sx={{ width: "90%", my: "24px", mx: "auto" }} />
                    </Box>
                  ))
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "24px",
                      fontWeight: 700,
                    }}
                  >
                    Your Cart is Empty
                  </Box>
                )}
              </Box>
            </Box>
            <Divider></Divider>
            <Box
              sx={{
                position: "sticky",
                bottom: 0,
                backgroundColor: "#FFF3E0",
                padding: "16px",
              }}
            >
              <SubTotal cartData={data?.data} />
            </Box>
          </Drawer>
        </Fragment>
      </Box>
    </Box>
  );
}
