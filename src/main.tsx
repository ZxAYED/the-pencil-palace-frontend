import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import routes from "./App/routes/routes";
import { ParallaxProvider } from "react-scroll-parallax";

const customTheme = createTheme({
  typography: {
    fontFamily:
      "'Poppins', 'Josefin Sans', 'Raleway', 'Source Code Pro', 'Anonymous Pro', sans-serif",
    h1: { fontWeight: 700, fontSize: "3rem", lineHeight: 1.2 },
    h2: { fontWeight: 600, fontSize: "2.5rem", lineHeight: 1.3 },
    body1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.5 },
    button: { fontWeight: 500, textTransform: "none" },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#fff8e1",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:after": {
            borderBottomColor: "#29B6F6",
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
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ParallaxProvider>
  </StrictMode>
);
