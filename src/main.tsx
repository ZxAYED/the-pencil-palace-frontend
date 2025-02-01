import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import routes from "./App/routes/routes.tsx";

const theme = createTheme({
  typography: {
    fontFamily:
      "'Poppins', 'Josefin Sans', 'Raleway', 'Source Code Pro', 'Anonymous Pro', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    button: { fontWeight: 500 },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>
);
