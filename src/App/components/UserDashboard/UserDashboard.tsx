import { Box } from "@mui/material";
import SocialSection from "../../utils/SocialSection";
import UserOrderManagement from "./UserOrderManagement";
import UserProfile from "./UserProfile";

const UserDashboard = () => {
  return (
    <Box className="mb-[40px]">
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },

          alignItems: {
            xs: "center",
            lg: "flex-start",
          },

          gap: 4,
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "20%" } }}>
          <UserProfile />
        </Box>

        <Box sx={{ width: { xs: "100%", lg: "60%" }, flexGrow: 1 }}>
          <UserOrderManagement />
        </Box>
      </Box>
      <SocialSection></SocialSection>
    </Box>
  );
};

export default UserDashboard;
