import ZTextField from "../../utils/ZTextField";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import ZForm from "../../utils/ZForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import ZRatingField from "../../utils/ZRatingField";
import ZButton from "../../utils/ZButton";
import { useCreateProductMutation } from "../../Redux/features/products/productsApi";
import { toast } from "sonner";
import LoadingAnimation from "./../../utils/LoadingAnimation";
import ZSelect from "../../utils/ZSelect";

const CreateProduct = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const categories = [
    { value: "Office Supplies", label: "Office Supplies" },
    { value: "Art Supplies", label: "Art Supplies" },
    { value: "Technology", label: "Technology" },
    { value: "Educational", label: "Educational" },
    { value: "Writing", label: "Writing" },
  ];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating product");
    const formData = new FormData();
    const isFeatured = true;
    const brand = "The-Pencil-Palace";
    formData.append("name", data.name);
    formData.append("brand", brand);
    formData.append("price", data.price.toString());
    formData.append("category", data.category);
    formData.append("isFeatured", isFeatured.toString());
    formData.append("description", data.description);

    formData.append("features", data.features);
    formData.append("quantity", String(data.quantity));
    formData.append("rating", String(data.rating));
    if (data.profileImage && data.profileImage instanceof File) {
      formData.append("profileImage", data.profileImage);
    } else {
      return toast.error("Please upload a valid profile image");
    }

    const res = await createProduct(formData);
    if (!res?.data?.success) {
      console.log(res);
      toast.error(res?.data?.message, {
        id: toastId,
      });
    } else {
      toast.success("Product created successfully", {
        id: toastId,
      });
    }
  };
  return isLoading ? (
    <LoadingAnimation />
  ) : (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          lg: "70%",
        },
        fontFamily: "Raleway",
      }}
      className="container !mt-[40px] mx-auto"
    >
      <ZForm onSubmit={onSubmit}>
        <Typography color="#424242" variant="h4" textAlign="center">
          Create a New Product -The Pencil Palace
        </Typography>
        <Typography
          color="GrayText"
          className="!my-[16px]"
          variant="h6"
          textAlign="center"
        >
          Add and showcase your unique stationery products effortlessly with our
          intuitive product creation page. Provide essential details such as
          product name, description, price, and images to captivate your
          customers and boost sales. Make every listing stand out in the vibrant
          world of Pencil Palace.
        </Typography>
        <Box
          className=" rounded-xl mx-auto"
          sx={{
            backgroundColor: "#FFF3E0",
            padding: "32px",

            margin: "auto",
            borderRadius: "12px",
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <ZTextField label="Product Name" name="name" type="text" />

            <ZTextField label="Price" name="price" type="number" />
            <ZSelect label="Category" name="category" options={categories} />
            <ZTextField label="Description" name="description" type="text" />
            <ZTextField label="Features" name="features" type="text" />
            <ZTextField label="Quantity" name="quantity" type="number" />
            <ZTextField label="Photo URL" name="profileImage" type="file" />

            <ZRatingField label="Rating" name="rating" type="number" />
          </Box>

          <Box
            sx={{ marginTop: "24px", display: "grid", placeItems: "center" }}
          >
            <ZButton name="Create Product" />
          </Box>
        </Box>
      </ZForm>
    </Box>
  );
};

export default CreateProduct;
