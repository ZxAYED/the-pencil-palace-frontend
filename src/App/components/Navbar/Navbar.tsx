/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  Toolbar,
} from "@mui/material";
import { Img } from "react-image";

import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.webp";
import { logout, selectCurrentUser } from "../../Redux/features/Auth/authSlice";
import OrderModal from "../Orders/OrderModal";

import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    toast.success("Logged out successfully");
  };
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
    { name: "Home", path: "/" },
    {
      name: "All Products",
      path: "/all-products",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#424242",
        borderRadius: "20px",
      }}
    >
      {user?.user ? (
        <Img
          alt="Profile"
          className="w-[100%] h-[40dvh]"
          src={user.user.profileImage}
        />
      ) : (
        <Img src={logo} alt="logo" className="w-[100%] h-[40dvh]" />
      )}

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} button component={NavLink} to={item?.path}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        <Box className="my-[8px]   !font-[500] ">
          <OrderModal />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginLeft: "16px",
            alignItems: "flex-start",
            justifySelf: "flex-start",
            marginTop: "8px",
          }}
        >
          {user?.user?.role && (
            <Button
              sx={{
                color: "#424242",
                fontWeight: "400",
                borderColor: "#424242",
                fontSize: "16px",
                width: "100%",
                marginLeft: "-6px",
                borderRadius: "8px",
                letterSpacing: "0px",
              }}
              onClick={() => navigate(`/${user?.user?.role}/dashboard`)}
              className="Zbutton Ztype1 Zbtn-txt "
            >
              Dashboard
            </Button>
          )}

          <Box
            button
            className="Zbutton Ztype1 Zbtn-txt"
            sx={{
              color: "#424242",
              fontWeight: "400",
              borderColor: "#424242",
              fontSize: "16px",
              width: "100%",
              letterSpacing: "0px",
              borderRadius: "8px",
            }}
            onClick={handleLogout}
          >
            Logout
          </Box>
        </Box>
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
            width: {
              xs: "80%",
              md: "100%",
            },
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
              gap: {
                md: "40px",
                xl: "80px",
              },
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
                    fontSize: "16px",
                  }}
                >
                  {item.name}
                </Button>
              </NavLink>
            ))}
            <OrderModal />
          </Box>
          <Box>
            {user ? (
              <Box>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  onClick={handleProfileMenuOpen}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                  }}
                >
                  {user?.user?.profileImage ? (
                    <Img
                      alt="Profile"
                      className="h-[50px] w-[50px] rounded-full"
                      src={user.user.profileImage}
                    />
                  ) : (
                    <Avatar />
                  )}
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    mt: ["50px"],
                  }}
                >
                  <Box className="mx-[10px] flex justify-between items-center gap-[16px] !mb-[16px]">
                    <Box className="flex items-center  ">
                      <Img
                        src={user?.user?.profileImage}
                        alt="profile"
                        className="w-[50px] h-[50px] rounded-full"
                      />
                    </Box>
                    <Box>
                      <Box className="text-[#424242] text-[14px] !font-[500]">
                        {user?.user?.name}
                      </Box>
                      <Box className="text-[14px] text-[#424242] !py-[4px] !font-[500]">
                        {user?.user?.email}
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                  {user?.user?.role && (
                    <Box className="flex flex-col gap-[8px] h-[50px] items-center p-[8px] justify-center">
                      <Button
                        sx={{
                          color: "#424242",
                          fontWeight: "500",
                          borderColor: "#424242",
                          fontSize: "16px",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        onClick={() =>
                          navigate(`/${user?.user?.role}/dashboard`)
                        }
                        className="Zbutton Ztype1 Zbtn-txt "
                      >
                        Dashboard
                      </Button>
                    </Box>
                  )}

                  <Box className="flex flex-col gap-[8px]  items-center p-[8px] justify-center">
                    <Button
                      button
                      className="Zbutton Ztype1 Zbtn-txt flex justify-center items-center "
                      sx={{
                        color: "#424242",
                        fontWeight: "500",
                        borderColor: "#424242",
                        fontSize: "16px",
                        width: "100%",
                        borderRadius: "8px",
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Box>
                </Menu>
              </Box>
            ) : (
              <button
                type="button"
                className="Zbutton Ztype1 Zbtn-txt !px-[12px] !py-[12px] !rounded-[4px]  !font-[600] !letter-spacing-[4px] text-[14px] "
                onClick={() => {
                  navigate("/login");
                }}
              >
                LOGIN
              </button>
            )}
          </Box>
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
              width: {
                xs: "300px",
                sm: "350px",
                md: "400px",
              },
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
