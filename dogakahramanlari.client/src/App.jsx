<<<<<<< HEAD
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
=======
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AnimalsInCages from './Pages/AnimalsInCages/AnimalsInCages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 7b1671faf5488a2e5f52feea71d6633b4acf0180

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/login" element={<Login />} />
=======
          <Route path='/login' element={<Login />} />
          <Route path='/cages' element={<AnimalsInCages />} />
>>>>>>> 7b1671faf5488a2e5f52feea71d6633b4acf0180
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
