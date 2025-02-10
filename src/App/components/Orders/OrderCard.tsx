/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useRemoveFromCartMutation } from "../../Redux/features/products/productsApi";
import { toast } from "sonner";

const OrderCard = ({ item, refetch }: any) => {
  const customStarStyles = {
    itemShapes: Star,
    activeFillColor: "#FFD700",
    inactiveFillColor: "#D3D3D3",
  };
  const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

  const handleDelete = async () => {
    try {
      const res = await removeFromCart(item._id);
      console.log(res);
      refetch();
      if (!res.data.success) {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "#FFF3E0",
        borderTopRightRadius: "24px",
        borderBottomLeftRadius: "24px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        margin: "8px 0",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "40%",
          },
          height: "200px",
          background: `url(${item.productId.profileImage}) center/cover no-repeat`,
        }}
      />

      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "60%",
          },
          padding: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#424242",
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          {item.productId.name}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            marginTop: "8px",
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          Category: {item.productId.category}
        </Typography>

        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            fontSize: "14px",
            marginTop: "8px",
            lineHeight: "1.5",
            color: "#757575",
          }}
        >
          {item.productId.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#424242",
              marginBottom: {
                xs: "8px",
                sm: "0",
              },
            }}
          >
            ${item?.productId?.price}
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#424242",
              marginBottom: {
                xs: "8px",
                sm: "0",
              },
            }}
          >
            Quantity: {item?.quantity}
          </Typography>

          <Rating
            value={item?.productId?.rating}
            readOnly
            itemStyles={customStarStyles}
            style={{ maxWidth: 130 }}
          />
        </Box>

        <Box sx={{ marginTop: "16px" }}>
          <button
            onClick={handleDelete}
            className="Zbutton Ztype1 Zbtn-txt uppercase font-[14px] fon-[700] w-full !px-[24px] !py-[12px] !rounded-[6px]"
          >
            {isLoading ? "Removing" : " Remove from cart"}
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderCard;
