import "./HomeStyle.css";

const Home = () => {
  return (

    <div className='home-wrapper'>
      <div className='home-header-container'>
        <div className='home-header'>DOĞA KAHRAMANLARI</div>
        <div className='home-header2'>DOĞA KAHRAMANLARI</div>
      </div>

      <div className='home-container'>
        <div className='home-button-container'>
          <button className='home-button'>
            <span className='home-text'>GİRİŞ YAP</span>
            <img className='board-img' src="/icon/board.png" alt="board-icon" />
          </button>
          <button className='home-button'>
            <span className='home-text'>KAYIT OL</span>
            <img className='board-img' src="/icon/board.png" alt="board-icon" />
          </button>
        </div>
      </div>
    </div>



  )
}

export default Home;