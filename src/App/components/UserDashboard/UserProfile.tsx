import { Box, Typography } from "@mui/material";
import { Img } from "react-image";
import { toast } from "sonner";
import { logout, selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import ZButton from "../../utils/ZButton";

const UserProfile = () => {
  const data = useAppSelector(selectCurrentUser);
  const user = data?.user;
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        px: 4,
        py: 4,
        mt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: {
          xs: "center",
          md: "flex-start",
        },
        bgcolor: "white",
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(4, 1, 1, 0.2)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "320px",
          borderRadius: "8px",
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Img
          src={user?.profileImage}
          alt={user?.name}
          style={{
            borderRadius: "8px",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#424242" }}>
        {user?.name || "User Name"}
      </Typography>
      <Typography sx={{ color: "#757575", mb: 1 }}>{user?.email}</Typography>

      <Box
        sx={{
          px: 3,
          py: 1,
          borderRadius: "20px",
          bgcolor: user?.status === "active" ? "#7CB342" : "#FF7043",
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          textTransform: "capitalize",
          mt: 1,
        }}
      >
        {user?.status || "Inactive"}
      </Box>

      <Box
        sx={{
          mt: 3,
          width: "100%",
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Typography
          sx={{ fontWeight: "500", color: "#757575", mb: 1, fontSize: "16px" }}
        >
          📞 {user?.phone || "Not Available"}
        </Typography>
        <Typography
          sx={{ fontWeight: "500", color: "#757575", mb: 1, fontSize: "16px" }}
        >
          📍 {user?.address || "No Address Provided"}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <ZButton
            onClick={() => {
              toast.success("Logged out successfully");
              dispatch(logout());
            }}
            name="Log Out"
          ></ZButton>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
