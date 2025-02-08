/* eslint-disable @typescript-eslint/no-explicit-any */
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
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
  styled,
} from "@mui/material";

import logo from "../../../assets/logo.webp";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [count, setCount] = useState<number>(0);

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: any) => {
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
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "#424242", borderRadius: "20px" }}
    >
      <img src={logo} alt="logo" className="w-[100%] h-[40dvh]" />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} button component={NavLink} to={item?.path}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        className="
        h-full w-[100%] !bg-transparent !rounded-md !bg-clip-padding !backdrop-filter backdrop-blur-[10px]  !bg-opacity-10 box-border
        "
        sx={{
          color: "#424242",
          // backgroundColor: "#fff8e1",
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
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavLink to="/" className="no-underline">
              <Box
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#424242",
                }}
                className=" !text-[24px] !font-[900]  !text-primary no-underline"
              >
                The Pencil Palace
              </Box>
            </NavLink>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "80px",
              alignItems: "center",
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
                    fontSize: "18px",
                  }}
                >
                  {item.name}
                </Button>
              </NavLink>
            ))}
            <Box>
              <IconButton>
                <ShoppingCartIcon fontSize="medium" />
                <CartBadge
                  badgeContent={count}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>
            </Box>
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleProfileMenuOpen}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              width: 54,
              height: 54,
              p: 1,
              boxSizing: "border-box",
              marginRight: {
                md: "10px",
                xl: "0px",
              },
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
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
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

export default NavBar;
