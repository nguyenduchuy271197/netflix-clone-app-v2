import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browser from "./pages/Browser";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browser" element={<Browser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
