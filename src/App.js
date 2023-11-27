import "./App.css";
import "./Custom.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ventures from "./components/Ventures";
import Faqs from "./components/Faqs";
import Details from "./components/Details";
import DetailsNavbar from "./components/DetailsNavbar";
import About from "./components/About";
import Tips from "./components/Tips";
import Dashboard from "./components/Dashboard";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tips" element={<Tips />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Details" element={<DetailsNavbar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<Tips />} />
        </Routes>
        {/* <Login /> */}
        {/* <Signup /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
