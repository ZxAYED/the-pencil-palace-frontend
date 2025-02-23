/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import {
  useGetOrderOfUserQuery,
  useRemoveOrderMutation,
} from "../../Redux/features/orders/orderApi";
import { useAppSelector } from "../../Redux/hook";
import LoadingAnimation from "../../utils/LoadingAnimation";
import ZButton from "../../utils/ZButton";

const UserOrderManagement = () => {
  const user = useAppSelector(selectCurrentUser);
  const [removeOrder] = useRemoveOrderMutation();
  const { data, isLoading, isFetching, refetch } = useGetOrderOfUserQuery(
    user?.user?.email,
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const handleDelete = async (id: string) => {
    await removeOrder(id);

    refetch();
    toast.success("Order deleted successfully");
  };

  const orders = data?.data || [];

  return (
    <div className="container mx-auto p-[16px]">
      <h2 className="text-[28px] font-[700] mb-[16px]">Your Orders</h2>

      {isLoading || isFetching ? (
        <LoadingAnimation />
      ) : orders.length === 0 ? (
        <p className="text-[16px] text-gray-500">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg h-[30dvh] ">
            <thead>
              <tr className="bg-[#424242] text-[#fff]">
                <th className="px-[24px] py-[16px] text-[16px] font-[700]">
                  Order ID
                </th>
                <th className="px-[24px] py-[16px] text-[16px] font-[700]">
                  Total Price
                </th>
                <th className="px-[24px] py-[16px] text-[16px] font-[700]">
                  Status
                </th>
                <th className="px-[24px] py-[16px] text-[16px] font-[700]">
                  Ordered At
                </th>
                <th className="px-[24px] py-[16px] text-[16px] font-[700]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any) => (
                <tr key={order._id}>
                  <td className="!px-[24px] py-[16px] text-[16px] text-[#424242] bg-[#9DEEB3] font-[500]">
                    {order.OrderId ? order.OrderId : order._id}
                  </td>
                  <td className="px-[24px] py-[16px] text-[16px] text-[#424242] bg-[#9DEEB3] font-[500]">
                    ${order.totalPrice}
                  </td>
                  <td className="px-[24px] bg-[#9DEEB3] py-[16px] text-[16px]">
                    <span
                      className={`px-[12px] py-[8px] rounded-[5px] font-[700] text-[16px] ${
                        order.payment.status === "Paid"
                          ? "bg-[#7cc08e] text-[#424242]"
                          : "bg-[#FDCFD2] text-[#424242]"
                      }`}
                    >
                      {order.payment.status}
                    </span>
                  </td>
                  <td className="px-[24px] py-[16px] text-[16px] bg-[#9DEEB3] text-[#424242] font-[500]">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="flex items-center justify-center bg-[#9DEEB3] w-full h-full ">
                    <ZButton
                      onClick={() => handleDelete(order._id)}
                      name="Delete"
                    ></ZButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserOrderManagement;
