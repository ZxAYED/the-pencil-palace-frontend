import { selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import { useGetOrderQuery } from "../../Redux/features/orders/orderApi";
import { useAppSelector } from "../../Redux/hook";
import LoadingAnimation from "../../utils/LoadingAnimation";

const UserOrderManagement = () => {
  const user = useAppSelector(selectCurrentUser);

  const { data, isLoading, isFetching } = useGetOrderQuery(user?.user?.email, {
    refetchOnMountOrArgChange: true,
  });

  console.log(data);
  const orders = data?.data || [];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>

      {isLoading || isFetching ? (
        <LoadingAnimation />
      ) : orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Ordered At</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="px-4 py-2">{order._id}</td>
                  <td className="px-4 py-2">${order.totalPrice}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        order.status === "Delivered"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {new Date(order.createdAt).toLocaleDateString()}
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
