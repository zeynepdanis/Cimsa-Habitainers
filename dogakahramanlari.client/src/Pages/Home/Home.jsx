import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomeStyle.css";



const Home = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // 'login' rotasına yönlendirme yapar
  };

  const handleRegisterClick = () => {
    navigate('/register'); // 'register' rotasına yönlendirme yapar
  };




  return (

    <div className='home-wrapper'>
      <div className='home-header-container'>
        <div className='home-header'>DOĞA KAHRAMANLARI</div>
        <div className='home-header2'>DOĞA KAHRAMANLARI</div>
      </div>

      <div className='home-container'>
        <div className='home-button-container'>
          <button className='home-button' onClick={handleLoginClick}>
            <div className="home-text-container">
              <p className='home-text'>GİRİŞ YAP</p>
            </div>
            <img className='board-img' src="/icon/board.png" alt="board-icon" />
          </button>
          <button className='home-button' onClick={handleRegisterClick}>
            <div className="home-text-container">
              <p className='home-text'>KAYIT OL</p>
            </div>
            <img className='board-img' src="/icon/board.png" alt="board-icon" />
          </button>
        </div>
      </div>
    </div>



  )
}

export default Home;