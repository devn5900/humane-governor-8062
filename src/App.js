import logo from "./logo.svg";
import "./App.css";
import ApiMixer from "./pages/ApiGenerator/ApiMixer";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer";
import AdminNavbar from "./components/Admin_components/AdminNavbar";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const toggleNav = location.pathname.includes("admin");
  return (
    <Box>
      {!toggleNav ? <Navbar /> : <AdminNavbar />}
      {/* add your path in Routes/AllRoutes.jsx */}
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
