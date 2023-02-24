import logo from "./logo.svg";
import "./App.css";
import ApiMixer from "./pages/ApiGenerator/ApiMixer";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer";
import AdminNavbar from "./components/Admin_components/AdminNavbar";
<<<<<<< HEAD
import { useLocation } from "react-router-dom";
=======
import Register from "./pages/Authentication/Register"
>>>>>>> 591786f95332ff63b26c113df7cf646048190586
function App() {
  const location = useLocation();
  const toggleNav = location.pathname.includes("admin");
  return (
    <Box>
      {!toggleNav ? <Navbar /> : <AdminNavbar />}
      {/* add your path in Routes/AllRoutes.jsx */}
      <AllRoutes />
<<<<<<< HEAD
      <Footer />
=======
      {/* <Register/> */}
      {/* <Footer /> */}
>>>>>>> 591786f95332ff63b26c113df7cf646048190586
    </Box>
  );
}

export default App;
