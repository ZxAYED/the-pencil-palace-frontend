import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "sonner";
import { store } from "./App/Redux/store";
import routes from "./App/routes/routes";
import "./index.css";

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
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <ParallaxProvider>
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
        </ParallaxProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
