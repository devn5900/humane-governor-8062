import logo from "./logo.svg";
import "./App.css";
import ApiMixer from "./pages/ApiGenerator/ApiMixer";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer";
function App() {
  return (
    <Box>
      <Navbar />
      {/* add your path in Routes/AllRoutes.jsx */}
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
