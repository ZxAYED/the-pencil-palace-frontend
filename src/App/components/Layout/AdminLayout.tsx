import { Home } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { DashboardLayout } from "@toolpad/core";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import { Outlet } from "react-router-dom";
import { toast } from "sonner";
import customTheme from "../../../main";
import { logout, selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";

const AdminNAVIGATION: Navigation = [
  { kind: "header", title: "Main items" },
  {
    segment: "admin/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "admin/dashboard/users",
    title: "User Management",
    icon: <GroupAddTwoToneIcon />,
  },
  {
    segment: "admin/dashboard/create-product",
    title: "Create A Product",
    icon: <NoteAddIcon />,
  },
  {
    segment: "admin/dashboard/all-products",
    title: "See All Products",
    icon: <ManageSearchIcon />,
  },
  {
    segment: "admin/dashboard/orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },

  {
    segment: "",
    title: "Home",
    icon: <Home />,
  },
];
const UserNAVIGATION: Navigation = [
  { kind: "header", title: "Main items" },
  {
    segment: "user/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "",
    title: "Home",
    icon: <Home />,
  },
];

export default function AdminLayout() {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": {
            fontFamily: "Raleway",
          },
          ".MuiListItem-root": {
            padding: "12px 20px",
            fontSize: "1rem",
            fontWeight: 600,
          },
          ".MuiListItemText-primary": {
            fontSize: "1.1rem",
            fontWeight: 700,
          },
        }}
      />
      <AppProvider
        authentication={{
          signOut: () => {
            dispatch(logout());
            toast.success("Logged out successfully");
          },
          signIn: () => {},
        }}
        session={{
          user: {
            id: user?.user?.name,
            name: user?.user?.name,
            email: user?.user?.email,
            image: user?.user?.profileImage,
          },
        }}
        theme={customTheme}
        branding={{
          title: `${user?.user?.role === "admin" ? "Admin" : "User"} Dashboard`,
          logo: "",
          homeUrl: `/${user?.user?.role}/dashboard`,
        }}
        navigation={
          user?.user?.role === "admin" ? AdminNAVIGATION : UserNAVIGATION
        }
      >
        <DashboardLayout sidebarExpandedWidth={220}>
          <Box
            sx={{ fontFamily: "Raleway" }}
            className="bg-[#FFF8E1] text-[#424242] container max-w-[95%]  mx-auto "
          >
            <Outlet />
          </Box>
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}
