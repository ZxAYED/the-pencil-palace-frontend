import React, { useState } from "react";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Drawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "white",
            borderRight: "1px solid #E0E0E0",
          },
        }}
        variant="persistent"
        anchor="left"
      >
        <Box className="flex flex-col h-full pt-[20px] px-[16px]">
          <List>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Reports" />
            </ListItem>
            {/* Add more items here as needed */}
          </List>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box className="flex-1 p-[16px] sm:ml-[256px]">
        {/* Navbar */}
        <Box className="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-[12px]">
          <Typography
            variant="h6"
            className="text-gray-900 dark:text-white text-[22px] font-bold"
          >
            Admin Dashboard
          </Typography>
        </Box>

        {/* Content */}
        <Box className="pt-[5px]">
          <Typography className="text-[18px] text-gray-800 font-semibold">
            Welcome to the Admin Panel! Here you can manage all the features.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
