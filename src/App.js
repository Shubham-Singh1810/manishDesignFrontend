import "./App.css";
import "./Responsive.css";
import HomeSlider from "./Components/HomeSlider";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AllRoute from "./Routes/AllRoute";
import { GlobalStateProvider } from "./GlobalProvider";
import Dashboard from "./adminProtectedPage/Dashboard";
function App() {
  return (
    <GlobalStateProvider>
      <Navbar />
      <AllRoute />
      <Footer />
    </GlobalStateProvider>
  );
}

export default App;
