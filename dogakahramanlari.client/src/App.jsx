import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
