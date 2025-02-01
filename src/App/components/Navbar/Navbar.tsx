import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../../../assets/logo.webp";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function ResponsiveNavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { name: "Home", path: "" },
    {
      name: "All Products",
      path: "all-products",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "#424242", borderRadius: "20px" }}
    >
      <img src={logo} alt="logo" className="w-10 h-10" />

      <List>
        {menuItems.map((item) => (
          <NavLink to={`${item.path}`} key={item.name}>
            <ListItem button key={item.name}>
              <ListItemText primary={item.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff8e1",
          color: "#424242",
          height: "80px",
          fontSize: "20px",
          fontWeight: "500",
          display: "flex",
          justifyContent: "center",
          boxShadow: "0px 0px 10px 0px rgba(66, 66, 66, 0.2)",

          alignItems: "center",
          textAlign: "center",

          borderRadius: "10px",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1280px",
            mx: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavLink to="/">
              <Box
                sx={{ cursor: "pointer" }}
                className=" text-[24px] font-[900] "
              >
                The Pencil Palace
              </Box>
            </NavLink>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {menuItems.map((item) => (
              <NavLink to={`${item.path}`} key={item.name}>
                <Button
                  className="Zbutton Ztype1 Zbtn-txt"
                  sx={{
                    color: "#424242",
                    fontWeight: "500",
                    borderColor: "#424242",
                    fontSize: "16px",
                  }}
                >
                  {item.name}
                </Button>
              </NavLink>
            ))}
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleProfileMenuOpen}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              alignItems: "center",
              width: 54,
              height: 54,
              p: 1,
            }}
          >
            <AccountCircle sx={{ fontSize: 40 }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              borderRadius: "40%",
              marginTop: "40px",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveNavMenu;
