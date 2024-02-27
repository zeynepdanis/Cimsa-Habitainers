import Login from './Pages/Login/Login';
import Anasayfa from './Pages/Anasayfa/Anasayfa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/anasayfa' element={<Anasayfa />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App