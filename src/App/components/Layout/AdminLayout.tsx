import { DashboardLayout } from "@toolpad/core";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import { Outlet } from "react-router-dom";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "admin/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
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
    segment: "admin/dashboard/delete-product",
    title: "Remove A Product",
    icon: <ShoppingCartIcon />,
  },

  {
    segment: "admin/dashboard/update-product",
    title: "Modify A Product",
    icon: <ShoppingCartIcon />,
  },

  {
    segment: "Orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "D",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

export default function AdminLayout() {
  return (
    <AppProvider navigation={NAVIGATION}>
      <DashboardLayout>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
