import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimalsInCages from './Pages/AnimalsInCages/AnimalsInCages';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Forest from "./Pages/ForestPage/Forest";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import "./index.css";
import Tasks from "./Pages/Tasks/Tasks";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/cages' element={<AnimalsInCages />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forest" element={<Forest />} />
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<div style={{
            fontSize: '50px',
            color: 'green',
            fontWeight: 'bold'
          }}>Sayfa Bulunamadi</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
