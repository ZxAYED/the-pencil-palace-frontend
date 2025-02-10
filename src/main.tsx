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
    fontFamily: "Raleway,  sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#FFF8E1",

          padding: "8px 12px",
          borderRadius: "4px",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:after": {
            borderBottomColor: "#29B6F6",
          },
          "&:before": {
            borderBottomColor: "#757575",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#29B6F6",
          "&.Mui-focused": {
            color: "#29B6F6",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF8E1",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
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
