<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { HomeStar } from '../../assets/svg/icons';
import Background from '../Background/Background';
import { HomeWrapper } from './Home.style';
=======
import "./HomeStyle.css";
>>>>>>> 93ef64648b0dc793745263c0157b37970b551ad0

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

      <div className='home-container'>
<<<<<<< HEAD
        <div className='button-container'>
          <button onClick={openLoginHandler} className='button'> 
            <span className='text'>GİRİŞ YAP</span>
            <HomeStar />
          </button>
          <button onClick={openRegisterHandler} className='button'> 
            <span className='text'>KAYIT OL</span>
            <HomeStar />
=======
        <div className='home-button-container'>
          <button className='home-button'>
            <span className='home-text'>GİRİŞ YAP</span>
            <img className='board-img' src="/icon/board.png" alt="board-icon" />
          </button>
          <button className='home-button'>
            <span className='home-text'>KAYIT OL</span>
            <img className='board-img' src="/icon/board.png" alt="board-icon" />
>>>>>>> 93ef64648b0dc793745263c0157b37970b551ad0
          </button>
        </div>
      </div>
    </div>



  )
}

export default Home;