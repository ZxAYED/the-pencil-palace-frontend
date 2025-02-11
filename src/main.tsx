import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import routes from "./App/routes/routes";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./App/Redux/store";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#29B6F6",
    },
    secondary: {
      main: "#424242",
    },
    background: {
      default: "#FFF8E1",
      paper: "#FFF8E1",
    },
    text: {
      primary: "#424242",
      secondary: "#757575",
    },
    action: {
      hover: "#29B6F6",
    },
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          fontFamily: "Raleway, sans-serif",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#424242",
          fontFamily: "Raleway, sans-serif",
          padding: "8px 12px",
          borderRadius: "4px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: "Raleway, sans-serif",
        },
        icon: {
          color: "#424242",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Raleway, sans-serif",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FFF8E1",
          color: "#424242",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
});

export default customTheme;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <RouterProvider router={routes} />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#fff8e1",
                color: "#424242",
              },
              className: "class",
            }}
          />
        </ThemeProvider>
      </ParallaxProvider>
    </Provider>
  </StrictMode>
);
