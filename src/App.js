import "./App.css";
import "./Custom.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ventures from "./components/Ventures";
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
        </Routes>
        {/* <Login /> */}
        {/* <Signup /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
