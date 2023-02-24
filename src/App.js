import logo from "./logo.svg";
import "./App.css";
import ApiMixer from "./pages/ApiGenerator/ApiMixer";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer";
import AdminNavbar from "./components/Admin_components/AdminNavbar";
import Register from "./pages/Authentication/Register"
function App() {
  return (
    <Box>
      {/* <Navbar /> */}
      {/* <AdminNavbar/> */}
      {/* add your path in Routes/AllRoutes.jsx */}
      <AllRoutes />
      {/* <Register/> */}
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
