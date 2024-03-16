import { useNavigate } from 'react-router-dom';
import "./HomeStyle.css";

const Home = () => {
  const navigate = useNavigate();

  const openLoginHandler = () => {
    const newPath = '/login';
    navigate(newPath);
  };

  const openRegisterHandler = () => {
    const newPath = '/register';
    navigate(newPath);
  };

  return (

    <div className='home-wrapper'>
      <div className='home-header-container'>
        <div className='home-header'>DOĞA KAHRAMANLARI</div>
        <div className='home-header2'>DOĞA KAHRAMANLARI</div>
      </div>
        <div className='home-button-container'>
          <button onClick={openLoginHandler} className='home-button'>
            <span className='home-text'>GİRİŞ YAP</span>
            <img className='board-img' src="/icon/board.png" alt="board-icon" />
          </button>
          <button onClick={openRegisterHandler} className='home-button'>
            <span className='home-text'>KAYIT OL</span>
            <img className='board-img' src="/icon/board.png" alt="board-icon" />
          </button>
        </div>
      </div>
  )
}

export default Home;