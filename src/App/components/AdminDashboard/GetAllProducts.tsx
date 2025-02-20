/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useDeleteProductMutation,
  useGetProductsForAdminQuery,
} from "../../Redux/features/products/productsApi";

import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import LoadingAnimation from "../../utils/LoadingAnimation";

import { motion } from "framer-motion";
import { toast } from "sonner";
import UpdateProduct from "./UpdateProduct";

const GetAllProducts = () => {
  const { data, isFetching, isLoading, refetch } = useGetProductsForAdminQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  console.log(data);
  const products = data?.data || <LoadingAnimation />;

  const handleDelete = async (productId: string) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this product?</p>
          <div className="flex gap-4 mt-[10px]">
            <button
              onClick={async () => {
                toast.dismiss(t);

                try {
                  const res = await deleteProduct({ id: productId });

                  if (res.error) {
                    toast.error("Failed to delete product");
                  } else {
                    toast.success("Product deleted successfully");
                    refetch();
                  }
                } catch (error) {
                  toast.error("Failed to delete product");
                  console.error(error);
                }
              }}
              className="bg-green-500 hover:bg-green-700 text-white px-[12px] py-[5px] rounded-md"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t)}
              className="bg-red-500 hover:bg-red-700 text-white px-[12px] py-[5px] rounded-md"
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };

  return (
    <>
      {isLoading || isFetching || isDeleting ? (
        <div className="grid place-items-center h-screen">
          <LoadingAnimation />
        </div>
      ) : (
        <div className="  !mb-[120px]  container mx-auto  rounded-2xl shadow-lg">
          <h2 className="text-[28px] font-[700] flex items-center gap-[16px] justify-between">
            <span className="flex items-center ">
              Product List <ListAltTwoToneIcon />
            </span>
            <span className="  ">Total -{products?.length} Items</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left rounded-lg ">
              <thead>
                <tr>
                  <th className="px-[24px] py-[16px] bg-[#424242] text-[#fff]  font-[700]">
                    Image
                  </th>
                  <th className="px-[24px] py-[16px] bg-[#424242] text-[#fff]  font-[700]">
                    Name
                  </th>

                  <th className="bg-[#424242] text-[#fff]  px-[24px] py-[16px]  font-[700]">
                    Brand
                  </th>
                  <th className="bg-[#424242] text-[#fff]  px-[24px] py-[16px]  font-[700]">
                    Category
                  </th>
                  <th className="bg-[#424242] text-[#fff]  px-[24px] py-[16px]  font-[700]">
                    Price (BDT)
                  </th>
                  <th className="bg-[#424242] text-[#fff]  px-[24px] py-[16px]  font-[700]">
                    Quantity
                  </th>
                  <th className="bg-[#424242] text-[#fff]  px-[24px] py-[16px]  font-[700]">
                    In Stock
                  </th>
                  <th className="bg-[#424242] text-[#fff]  px-[24px] py-[16px]  font-[700]">
                    Rating
                  </th>
                  <th className="bg-[#424242] text-[#fff]  px-[24px] py-[16px]  font-[700] flex justify-center items-center ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product: any) => (
                  <tr key={product._id} className="">
                    <td className="px-[24px] py-[16px]">
                      <img
                        src={product.profileImage}
                        alt={product.name}
                        className="w-[80px] h-[80px] object-cover"
                      />
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[500]  ">
                      {product.name}
                    </td>

                    <td className="px-[24px] py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[500]">
                      {product.brand}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[500]">
                      {product.category}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[600]">
                      {product.price} BDT
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[500]">
                      {product.quantity}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[500] ">
                      {product.inStock ? (
                        <span className="bg-[#9DEEB3] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          In Stock
                        </span>
                      ) : (
                        <span className="bg-[#FDCFD2] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Out of Stock
                        </span>
                      )}
                    </td>
                    <td className="px-[24px] !py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[500]">
                      {product.rating} ⭐
                    </td>
                    <td className="">
                      <motion.button
                        sx={{
                          display: {
                            xs: "block",
                            md: "flex",
                          },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="Zbutton Ztype1 Zbtn-txt !px-[16px] !py-[12px] font-raleway "
                      >
                        <UpdateProduct refetch={refetch} product={product} />
                      </motion.button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        disabled={isDeleting}
                        className={`Zbutton Ztype1 Zbtn-txt !px-[16px] !ml-[16px] !py-[12px] font-raleway ${
                          isDeleting
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        }`}
                      >
                        {isDeleting ? "Deleting..." : "Del"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default GetAllProducts;
