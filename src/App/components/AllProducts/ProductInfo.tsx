import { FavoriteBorder, LocalShipping, Verified } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import { useAddToCartMutation } from "../../Redux/features/orders/orderApi";
import { useGetProductByIdQuery } from "../../Redux/features/products/productsApi";
import { useAppSelector } from "../../Redux/hook";
import LoadingAnimation from "../../utils/LoadingAnimation";
import QuantitySelector from "./QuantitySelector";

const ProductInfo = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetProductByIdQuery(id, {
    skip: !id,
  });
  const [addToCart, { isLoading: isAddToCartLoading }] = useAddToCartMutation();

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev: number) => prev + 1);
  const handleDecrease = () =>
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  const user = useAppSelector(selectCurrentUser);

  if (!user) {
    toast.error("Please Login to See Product Details");
    return <Navigate to="/login" />;
  }
  if (isLoading) return <LoadingAnimation />;
  if (error) return <p>Error fetching product details.</p>;

  const handleAddToCart = async () => {
    const toastId = toast.loading("Adding to Cart...");

    const cartData: {
      products: {
        product: string;
        quantity: number;
      };
      userId: string;
      email: string;
      totalPrice: number;
    } = {
      products: {
        product: data?.data?._id,
        quantity: quantity,
      },
      userId: user?.user?._id,
      email: user?.user?.email,
      totalPrice: data?.data?.price * quantity,
    };

    try {
      const res = await addToCart(cartData);

      toast.success(`${data?.data?.name} added to cart`, { id: toastId });
      refetch();
      if (res.data.success) {
        toast.error(res.data.message, { id: toastId });
      }
      if (!res.data.success) {
        toast.error(res.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Error adding to cart", { id: toastId });
      console.log(error);
    }
  };

  const customStarStyles = {
    itemShapes: Star,
    activeFillColor: "#FFD700",
    inactiveFillColor: "#D3D3D3",
  };

  return (
    <Box
      sx={{
        p: "24px",
        gap: "24px",
        marginTop: "100px",
        maxWidth: { xs: "100%", lg: "1280px" },
        margin: "0 auto",
      }}
    >
      <Typography sx={{ fontSize: "15px", fontWeight: "100" }}>
        <Link to="/">Home</Link>/<Link to="/all-products">Products</Link>/
        Product Details - {data?.data?._id}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "start",
            width: { xs: "100%", md: "100%", lg: "50%" },
            height: "full",
            marginTop: "16px",
          }}
        >
          <img
            src={data?.data?.profileImage}
            alt={data?.data?.name}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "600px",
              objectFit: "contain",
              borderRadius: "6px",
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            textAlign: { xs: "center", lg: "left" },
            p: "24px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "40px", fontWeight: "700", mb: "16px" }}
          >
            {data?.data?.name}
          </Typography>
          <Typography
            sx={{ fontSize: "20px", mt: "16px", mb: "24px", color: "#757575" }}
          >
            {data?.data?.description}
          </Typography>
          <Typography
            sx={{ fontSize: "20px", mt: "16px", mb: "24px", color: "#757575" }}
          >
            <span className="font-[600]">Features :</span>{" "}
            {data?.data?.features}
          </Typography>
          <Box sx={{ mt: "24px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">
                Price: {data?.data?.price} /=
              </Typography>
              <Typography variant="h6">
                Stock: {data?.data?.quantity} items
              </Typography>
            </Box>
            <Typography
              sx={{ mt: "32px" }}
              variant="h6"
              className="flex items-center gap-[12px]"
            >
              <span style={{ fontWeight: "bold", color: "#424242" }}>
                User Review :
              </span>
              <Rating
                value={data?.data?.rating}
                readOnly
                itemStyles={customStarStyles}
                style={{ maxWidth: 130 }}
              />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              mt: "36px",
              flexWrap: "wrap",
              justifyContent: { xs: "center", lg: "space-between" },
            }}
          >
            <QuantitySelector
              quantity={quantity}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
            <Button
              onClick={handleAddToCart}
              variant="contained"
              sx={{
                backgroundColor: "#424242",
                color: "white",
                p: "12px 24px",
                fontSize: "18px",
              }}
              className="Zbutton Ztype1 Zbtn-txt  !rounded-[4px]  !font-[600] !letter-spacing-[4px] text-[14px]"
            >
              {isAddToCartLoading ? "Adding..." : "Add to Cart"}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          mt: "48px",
          p: "24px",
          borderRadius: "8px",
          backgroundColor: "#FFF3E0",
          border: "1px solid #e0e0e0",
        }}
      >
        <Box sx={{ textAlign: "center", p: "16px" }}>
          <Verified sx={{ fontSize: "40px", color: "#424242" }} />
          <Typography variant="h6">Authorized Retailer</Typography>
          <Typography sx={{ color: "#757575" }}>
            Official International Products
          </Typography>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", lg: "block" } }}
        />

        <Box sx={{ textAlign: "center", p: "16px" }}>
          <LocalShipping sx={{ fontSize: "40px", color: "#424242" }} />
          <Typography variant="h6">Free Shipping</Typography>
          <Typography sx={{ color: "#757575" }}>
            More than 100 Products Delivered
          </Typography>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", lg: "block" } }}
        />

        <Box sx={{ textAlign: "center", p: "16px" }}>
          <FavoriteBorder sx={{ fontSize: "40px", color: "#424242" }} />
          <Typography variant="h6">Support</Typography>
          <Typography sx={{ color: "#757575" }}>
            We're Here to Help Anytime
          </Typography>
        </Box>
      </Box>
      <Box className="mt-[48px] ">
        <Typography className="!font-[700]" variant="h4">
          Related Products
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductInfo;
