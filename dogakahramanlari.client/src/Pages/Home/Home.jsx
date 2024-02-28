import Background from '../Background/Background';
import { HomeWrapper } from './Home.style';

const Home = () => {
  return (
    <HomeWrapper>
      <Background />

      <div className='header'>DOĞA KAHRAMANLARI</div>
      <div className='container'>
        <div className='button-container'>
          <button className='button'> GİRİŞ YAP </button>
          <button className='button'>KAYIT OL</button>
        </div>
      </div>

    </HomeWrapper>


  )
}

export default Home;