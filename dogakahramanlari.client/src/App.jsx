import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AnimalsInCages from './Pages/AnimalsInCages/AnimalsInCages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/cages' element={<AnimalsInCages />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App