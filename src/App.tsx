import { Outlet } from "react-router-dom";
import Navbar from "./App/components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}
export default App;
