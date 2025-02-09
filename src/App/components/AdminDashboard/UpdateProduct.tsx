/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, Fragment } from "react";
import { Box, Typography, Drawer } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import ZForm from "../../utils/ZForm";

import { toast } from "sonner";
import { useUpdateProductMutation } from "../../Redux/features/products/productsApi";
import LoadingAnimation from "../../utils/LoadingAnimation";
import ZSelectOptional from "../../utils/ZSelectOptional";
import ZTextFieldOptional from "../../utils/ZTextFieldOpional";
import ZButton from "../../utils/ZButton";
import ZRatingFieldOptional from "../../utils/ZRatingFieldOptional";

const UpdateProduct = ({
  product,
  refetch,
}: {
  product: any;
  refetch: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const { handleSubmit, control } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating product...");
    const formData = new FormData();
    const name = data?.name || product?.name;
    const price = data?.price || product?.price;
    const category = data?.category || product?.category;
    const description = data?.description || product?.description;
    const features = data?.features || product?.features;
    const quantity = data?.quantity || product?.quantity;
    const rating = data?.rating || product?.rating;
    formData.append("name", name);
    formData.append("brand", "The-Pencil-Palace");
    formData.append("price", price?.toString());
    formData.append("category", category);
    formData.append("description", description);
    formData.append("features", features);
    formData.append("quantity", String(quantity?.toString()));
    formData.append("rating", String(rating?.toString()));

    if (data?.profileImage && data?.profileImage instanceof File) {
      formData.append("profileImage", data?.profileImage);
    }
    console.log(Object.fromEntries(formData));
    const res = await updateProduct({ id: product._id, product: formData });

    if (!res?.data?.success) {
      console.log(res);
      toast.error(res?.data?.message, { id: toastId });
    } else {
      toast.success("Product updated successfully", { id: toastId });
      refetch();
    }
  };

  return isLoading ? (
    <Box className="grid place-items-center h-screen">
      <LoadingAnimation />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box onClick={handleClickOpen}>Mod</Box>
      <Fragment>
        <Drawer anchor="right" open={open} onClose={handleClose}>
          <Box
            sx={{
              width: {
                xs: "300px",
                md: "800px",
              },
              my: "100px",
            }}
          >
            <Typography
              variant="h4"
              color="#424242"
              textAlign="center"
              marginBottom="16px"
            >
              Update Product - The Pencil Palace
            </Typography>
            <Typography
              color="GrayText"
              variant="h6"
              textAlign="center"
              marginBottom="32px"
            >
              Update your product details, including name, description, price,
              and more.
            </Typography>

            <ZForm onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  backgroundColor: "#FFF3E0",
                  padding: "32px",
                  borderRadius: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },

                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <img
                    src={product?.profileImage}
                    alt={product?.name}
                    className="w-[100px] h-[100px] rounded-[6px]"
                  />
                  <Box className="border-[2px] rounded-[6px] p-[12px]  ">
                    <Typography className=" !mb-[8px] text-[#424242] ">
                      <span className="font-[700]">Product Id:</span>
                      {product._id}
                    </Typography>
                    <Typography className=" !mb-[8px] text-[#424242] ">
                      <span className="font-[700]">Product :</span>
                      {product.name}
                    </Typography>
                    <Typography className="text-[#424242] ">
                      <span className="font-[700]">Category :</span>
                      {product.category}
                    </Typography>
                  </Box>
                </Box>

                <ZTextFieldOptional
                  label="Product Name"
                  name="name"
                  control={control}
                  type="text"
                  placeholder={product.name}
                />
                <ZTextFieldOptional
                  label="Price"
                  name="price"
                  control={control}
                  type="number"
                  placeholder={product.price}
                />
                <ZSelectOptional
                  label="Category"
                  name="category"
                  control={control}
                  options={[
                    { value: "Office Supplies", label: "Office Supplies" },
                    { value: "Art Supplies", label: "Art Supplies" },

                    { value: "Technology", label: "Technology" },
                    { value: "Educational", label: "Educational" },
                    { value: "Writing", label: "Writing" },
                  ]}
                />
                <ZTextFieldOptional
                  label="Description"
                  name="description"
                  control={control}
                  type="text"
                  placeholder={product.description}
                />
                <ZTextFieldOptional
                  label="Features"
                  name="features"
                  control={control}
                  type="text"
                  placeholder={product.features}
                />
                <ZTextFieldOptional
                  label="Quantity"
                  name="quantity"
                  control={control}
                  type="number"
                  placeholder={product.quantity}
                />
                <ZTextFieldOptional
                  label="Photo URL"
                  name="profileImage"
                  control={control}
                  type="file"
                  placeholder={product.profileImage}
                />
                <ZRatingFieldOptional
                  label="Rating"
                  name="rating"
                  control={control}
                  type="number"
                  placeholder={product.rating}
                />
              </Box>

              <Box
                sx={{
                  marginTop: "24px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <ZButton name="Update Product" />
              </Box>
            </ZForm>
          </Box>
        </Drawer>
      </Fragment>
    </Box>
  );
};

export default UpdateProduct;
