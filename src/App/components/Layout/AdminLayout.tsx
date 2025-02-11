import { DashboardLayout } from "@toolpad/core";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
import { Outlet } from "react-router-dom";
import {
  Box,
  createTheme,
  CssBaseline,
  extendTheme,
  ThemeProvider,
  GlobalStyles,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { logout, selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import { Home } from "@mui/icons-material";
import customTheme from "../../../main";

const NAVIGATION: Navigation = [
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

export default function AdminLayout() {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: false },
  });

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
          signOut: () => dispatch(logout()),
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
        theme={demoTheme}
        branding={{
          title: "Admin Dashboard",
          logo: "",
          homeUrl: "/admin/dashboard",
        }}
        navigation={NAVIGATION}
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
