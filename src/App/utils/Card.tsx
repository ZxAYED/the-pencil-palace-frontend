/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Img } from "react-image";
import { Link } from "react-router-dom";
const Card = ({ product }: any) => {
  const customStarStyles = {
    itemShapes: Star,
    activeFillColor: "#FFD700",
    inactiveFillColor: "#D3D3D3",
  };

  return (
    <Link to={`/product/${product._id}`}>
      <Box
        sx={{
          width: { xs: 390, md: 420 },
          color: "#424242",
        }}
        className="flex flex-col w-full items-center  h-[500px]  space-y-[16px] border-[1px] border-[#2e2e2e] Zcard  rounded-[8px] !box-border "
      >
        <Box className="mx-auto mt-[48px]  w-[300px] h-[200px] ">
          <Img
            src={product?.profileImage}
            alt={product?.name}
            className="!w-[300px] !mx-auto !h-[200px] object-cover rounded-[6px] "
          />
        </Box>

        <div className="">
          <h1 className="!text-[24px] !flex justify-between !items-center !gap-[4px]  !font-[700] !ml-[10px]   ">
            {product.name}

            <span className="text-[10px] font-[500] ">
              {product.inStock ? (
                <span className="bg-[#9DEEB3] px-[10px] py-[6px] rounded-[5px] font-[700]  no-underline">
                  In Stock
                </span>
              ) : (
                <span className="bg-[#FDCFD2] px-[10px] py-[6px] rounded-[5px] font-[700]  no-underline">
                  Out of Stock
                </span>
              )}
            </span>
          </h1>

          <Box className="flex justify-between mx-auto">
            <Typography className="text-[12px] font-[500] px-[12px] py-[4px] flex justify-center items-center gap-[4px]">
              <span className="text-[16px] !font-[600]  ">Rating :</span>
              <Rating
                value={product?.rating}
                readOnly
                itemStyles={customStarStyles}
                style={{ maxWidth: 130 }}
              />
            </Typography>

            <h1 className="text-[16px] font-[600] ">
              Price :
              <span className="line-through text-[12px]">
                {product?.price + 200}/=
              </span>
              {product?.price}
            </h1>
          </Box>
          <div className="flex justify-end mt-[10px] gap-[12px]">
            <span className="text-[12px] font-[500] px-[12px] py-[4px] border border-[#cccccc] rounded-[50px]">
              {product?.category}
            </span>

            <span className="text-[12px] font-[500] px-[12px] py-[4px] border border-[#cccccc] rounded-[50px]">
              {product?.brand}
            </span>

            <span className="text-[12px] font-[500] px-[12px] py-[4px] border border-[#cccccc] rounded-[50px] Zprice">
              quantity : {product?.quantity}
            </span>
          </div>
        </div>
      </Box>
    </Link>
  );
};

export default Card;
