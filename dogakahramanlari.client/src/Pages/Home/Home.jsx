import { HomeStar } from '../../assets/svg/icons';
import Background from '../Background/Background';
import { HomeWrapper } from './Home.style';

const Home = () => {
  return (
    <HomeWrapper>
      <Background />
      <div className='header'>DOĞA KAHRAMANLARI</div>
      <div className='home-container'>
        <div className='button-container'>
          <button className='button'> 
            <span className='text'>GİRİŞ YAP</span>
            <HomeStar />
          </button>
          <button className='button'> 
            <span className='text'>KAYIT OL</span>
            <HomeStar />
          </button>
        </div>
      </div>

    </HomeWrapper>


  )
}

export default Home;