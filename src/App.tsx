import { Outlet } from "react-router-dom";
import Navbar from "./App/components/Navbar/Navbar";
import { Box } from "@mui/material";
import "./App.css";
import Footer from "./App/components/Footer/Footer";
function App() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ paddingTop: "80px" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
