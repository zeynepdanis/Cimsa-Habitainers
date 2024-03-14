import { useNavigate } from 'react-router-dom';
import { HomeStar } from '../../assets/svg/icons';
import Background from '../Background/Background';
import { HomeWrapper } from './Home.style';

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
    <HomeWrapper>
      <Background />
      <div className='header'>DOĞA KAHRAMANLARI</div>
      <div className='home-container'>
        <div className='button-container'>
          <button onClick={openLoginHandler} className='button'> 
            <span className='text'>GİRİŞ YAP</span>
            <HomeStar />
          </button>
          <button onClick={openRegisterHandler} className='button'> 
            <span className='text'>KAYIT OL</span>
            <HomeStar />
          </button>
        </div>
      </div>

    </HomeWrapper>


  )
}

export default Home;