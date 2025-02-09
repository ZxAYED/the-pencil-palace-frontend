/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetProductsQuery } from "../../Redux/features/products/productsApi";

import LoadingAnimation from "../../utils/LoadingAnimation";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";

import { motion } from "framer-motion";
import UpdateProduct from "./UpdateProduct";

const GetAllProducts = () => {
  const { data, isFetching, isLoading } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const products = data?.data || <LoadingAnimation />;
  return (
    <>
      {isLoading || isFetching ? (
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
                        src={product.profileImage || "default-image.jpg"}
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
                      BDT {product.price}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[500]">
                      {product.quantity}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] hover:text-[#2979FF] hover:duration-600 font-[500] ">
                      {product.inStock ? (
                        <span className="bg-[#9DEEB3] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Yes
                        </span>
                      ) : (
                        <span className="bg-[#FDCFD2] px-[10px] py-[5px] rounded-md font-[700]">
                          No
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
                        <UpdateProduct product={product} />
                      </motion.button>

                      <button className="Zbutton Ztype1 Zbtn-txt !px-[16px] !ml-[16px] !py-[12px] font-raleway cursor-pointer">
                        Delete
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
