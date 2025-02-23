/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Drawer, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateUserMutation } from "../../Redux/features/Auth/authApi";
import LoadingAnimation from "../../utils/LoadingAnimation";
import ZButton from "../../utils/ZButton";
import ZForm from "../../utils/ZForm";
import ZSelect from "../../utils/ZSelect";

const UpdateUser = ({ user, refetch }: { user: any; refetch: () => void }) => {
  const [open, setOpen] = useState(false);

  const { handleSubmit, control } = useForm();

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating product...");
    const { _id, email, name, phone, role, isDeleted } = user;
    const userData = {
      _id,
      email: email.toLowerCase(),
      name,
      phone,
      role,
      status: data.status,
      isDeleted,
    };

    const res = await updateUser({ id: _id, user: userData });

    if (!res?.data?.success) {
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
              Modify User
            </Typography>
            <Typography
              color="GrayText"
              variant="h6"
              textAlign="center"
              marginBottom="32px"
            >
              Modify user details to keep Website safer
            </Typography>

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
                  flexDirection: "column",
                  justifyItems: "center",
                  width: "100%",
                  alignItems: "center",
                  gap: "24px",
                  mx: "auto",
                }}
              >
                <img
                  src={user?.profileImage}
                  alt={user?.name}
                  className="w-[200px] h-[200px] rounded-[6px]"
                />

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                  }}
                  className="border-[2px] rounded-[6px]  !mt-[20px]"
                >
                  <table className="w-full bg-[#424242] ">
                    <tbody>
                      <tr>
                        <th className="px-[12px] py-[6px]  text-[#fff] font-[700]">
                          Name
                        </th>
                        <th className=" text-[#fff] px-[12px] py-[6px] font-[700]">
                          Email
                        </th>
                        <th className=" text-[#fff] px-[12px] py-[6px] font-[700]">
                          Phone
                        </th>
                        <th className=" text-[#fff] px-[12px] py-[6px] font-[700]">
                          Role
                        </th>
                        <th className=" text-[#fff] px-[12px] py-[6px] font-[700]">
                          Status
                        </th>
                        <th className=" text-[#fff] px-[12px] py-[6px] font-[700]">
                          isDeleted
                        </th>
                      </tr>
                      <tr key={user._id}>
                        <td className="px-[12px] py-[6px] text-[#fff] font-[500]">
                          {user.name}
                        </td>
                        <td className="px-[12px] py-[6px] text-[#fff] font-[500]">
                          {user.email}
                        </td>
                        <td className="px-[12px] py-[6px] text-[#fff] font-[500]">
                          {user.phone}
                        </td>
                        <td className="px-[12px] py-[6px] text-[#fff] font-[500]">
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

                        <td className="px-[12px] py-[6px] text-[#fff] font-[500]">
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
                        <td className="px-[12px] py-[6px] text-[#fff] font-[500]">
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
                      </tr>
                    </tbody>
                  </table>
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "flex",
                      md: "none",
                    },
                  }}
                  className="flex justify-center items-center gap-[16px]"
                >
                  <Box className="flex flex-col gap-[16px]">
                    <Typography className="text-[#424242] font-[700]">
                      <span className="text-[#424242] font-[700]">Name:</span>
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      <span className="text-[#424242] font-[700]">Email:</span>
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      <span className="text-[#424242] font-[700]">Phone:</span>
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      <span className="text-[#424242] font-[700]">Role:</span>
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      <span className="text-[#424242] font-[700]">Status:</span>
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      <span className="text-[#424242] font-[700]">
                        isDeleted:
                      </span>
                    </Typography>
                  </Box>
                  <Box className="flex flex-col gap-[16px]">
                    <Typography className="text-[#424242] font-[500]">
                      {user.name}
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      {user.email}
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      {user.phone}
                    </Typography>

                    <Typography className="text-[#424242] font-[500]">
                      {user.role === "admin" ? (
                        <span className=" bg-[#FDCFD2] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Admin
                        </span>
                      ) : (
                        <span className=" bg-[#9DEEB3]  px-[10px] py-[6px] rounded-[5px] font-[700]">
                          User
                        </span>
                      )}
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      {user.status === "active" ? (
                        <span className="bg-[#9DEEB3] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Active
                        </span>
                      ) : (
                        <span className="bg-[#FDCFD2] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Blocked
                        </span>
                      )}
                    </Typography>
                    <Typography className="text-[#424242] font-[500]">
                      {user.isDeleted === true ? (
                        <span className=" bg-[#FDCFD2] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          Deleted
                        </span>
                      ) : (
                        <span className="  bg-[#9DEEB3] px-[10px] py-[6px] rounded-[5px] font-[700]">
                          No
                        </span>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Divider
                  sx={{
                    width: "100%",
                    display: {
                      xs: "block",
                      md: "none",
                    },

                    border: "1px solid #424242",
                    margin: "20px 0",
                  }}
                />
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "90%",
                    },
                  }}
                >
                  <ZForm onSubmit={handleSubmit(onSubmit)}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        margin: {
                          xs: "10px 0",
                          md: "40px 0",
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        className="text-[#424242] font-[700]"
                        textAlign="center"
                      >
                        Block / Unblock User
                      </Typography>
                      <ZSelect
                        label="Status"
                        name="status"
                        control={control}
                        options={[
                          { value: "active", label: "Active" },
                          { value: "blocked", label: "Blocked" },
                        ]}
                      />

                      <Box
                        sx={{
                          marginTop: "24px",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <ZButton name="Update User" />
                      </Box>
                    </Box>
                  </ZForm>
                </Box>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Fragment>
    </Box>
  );
};

export default UpdateUser;
