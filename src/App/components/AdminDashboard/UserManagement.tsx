/* eslint-disable @typescript-eslint/no-explicit-any */

import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  useAllUsersQuery,
  useDeleteUserMutation,
} from "../../Redux/features/Auth/authApi";
import LoadingAnimation from "../../utils/LoadingAnimation";
import UpdateUser from "./UpdateUser";

const UserManagement = () => {
  const { data, isFetching, isLoading, refetch } = useAllUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const users = data?.data;

  const handleDelete = async (user: any) => {
    toast(
      (t) => (
        <div>
          <p>
            Are you sure you want to {user.isDeleted ? "restore" : "delete"}
            this user?
          </p>
          <div className="flex gap-[16px] mt-[10px]">
            <button
              onClick={async () => {
                toast.dismiss(t);

                try {
                  const res = await deleteUser({
                    id: user._id,
                    payload: { isDeleted: !user.isDeleted },
                  });

                  if (res.error) {
                    toast.error("Failed to delete user");
                  } else {
                    toast.success("User deleted successfully");
                    refetch();
                  }
                } catch (error) {
                  toast.error("Failed to delete user");
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
        <div className="!mb-[120px] container mx-auto rounded-2xl shadow-lg">
          <h2 className="text-[28px] font-[700] flex items-center gap-[16px] justify-between">
            <span className="flex items-center ">
              User List <ListAltTwoToneIcon />
            </span>
            <span>Total - {users?.length} Users</span>
          </h2>

          <div className="overflow-x-auto ">
            <table className="min-w-full text-left  rounded-lg">
              <thead>
                <tr>
                  <th className="px-[24px] py-[16px] bg-[#424242] text-[#fff] font-[700]">
                    Profile Image
                  </th>
                  <th className="px-[24px] py-[16px] bg-[#424242] text-[#fff] font-[700]">
                    Name
                  </th>
                  <th className="bg-[#424242] text-[#fff] px-[24px] py-[16px] font-[700]">
                    Email
                  </th>
                  <th className="bg-[#424242] text-[#fff] px-[24px] py-[16px] font-[700]">
                    Phone
                  </th>
                  <th className="bg-[#424242] text-[#fff] px-[24px] py-[16px] font-[700]">
                    Role
                  </th>
                  <th className="bg-[#424242] text-[#fff] px-[24px] py-[16px] font-[700]">
                    Status
                  </th>
                  <th className="bg-[#424242] text-[#fff] px-[24px] py-[16px] font-[700]">
                    isDeleted
                  </th>
                  <th className="bg-[#424242] text-[#fff] px-[24px] py-[16px] font-[700] flex justify-center items-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user: any) => (
                  <tr key={user._id}>
                    <td className="px-[24px] py-[16px]">
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-[80px] h-[80px] object-cover rounded-full"
                      />
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] font-[500]">
                      {user.name}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] font-[500]">
                      {user.email}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] font-[500]">
                      {user.phone}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] font-[500]">
                      {user.role === "admin" ? (
                        <span className=" bg-[#FDCFD2] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Admin
                        </span>
                      ) : (
                        <span className=" bg-[#9DEEB3]  px-[10px] py-[6px] rounded-[5px] font-[700]">
                          User
                        </span>
                      )}
                    </td>

                    <td className="px-[24px] py-[16px] text-[#424242] font-[500]">
                      {user.status === "active" ? (
                        <span className="bg-[#9DEEB3] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Active
                        </span>
                      ) : (
                        <span className="bg-[#FDCFD2] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Blocked
                        </span>
                      )}
                    </td>
                    <td className="px-[24px] py-[16px] text-[#424242] font-[500]">
                      {user.isDeleted === true ? (
                        <span className=" bg-[#FDCFD2] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Deleted
                        </span>
                      ) : (
                        <span className="  bg-[#9DEEB3] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          No
                        </span>
                      )}
                    </td>
                    <td className="  gap-2   ">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="Zbutton Ztype1 Zbtn-txt !px-[16px] !py-[12px] font-raleway max-w-[120px]"
                      >
                        <UpdateUser refetch={refetch} user={user} />
                      </motion.button>

                      <motion.button
                        onClick={() => handleDelete(user)}
                        whileTap={{ scale: 0.95 }}
                        disabled={isDeleting}
                        className={`Zbutton Ztype1 Zbtn-txt !px-[16px] !ml-[16px] !py-[12px] font-raleway  max-w-[120px] ${
                          isDeleting
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        }`}
                      >
                        {isDeleting ? "Deleting..." : "Del"}
                      </motion.button>
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

export default UserManagement;
