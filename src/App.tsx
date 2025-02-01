import { Outlet } from "react-router-dom";
import Navbar from "./App/components/Navbar/Navbar";
import { Box } from "@mui/material";
import "./App.css";
function App() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ paddingTop: "80px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
