import { HomeIcon, KeyIcon } from '../../assets/svg/icons';
import { TasksWrapper } from './Tasks.style';
import keyImage from '../../assets/pngs/key.png'
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
  const navigate = useNavigate();  

  const backDashboard = () => {
    const newPath = '/dashboard';
    navigate(newPath);
  };  

  return (
    <TasksWrapper>
        <div className='header'>
            <button
                onClick={backDashboard}
                className='home-icon'
            >
                <HomeIcon />
            </button>
            <div className='button-container'>
                <button
                    className='page-buttons'
                >
                    Görevler
                </button>
                <button
                    className='page-buttons'
                >
                    Hayvanlar
                </button>
                <button
                    className='page-buttons'
                >
                    Orman
                </button>
            </div>
            <div className='key-number'>
                <span>1</span> 
                <img className='key-image' src={keyImage} alt='keyImage'/>
            </div>
        </div>
        <div className='task-body'>
            <div className='task-head'>
                <div>
                    <span>Günlük Görevler</span>
                </div> 
                <div className='line'></div>
                <div>
                    <span>Haftalık Görevler</span>
                </div>  
            </div>
        </div>
    </TasksWrapper>
  )
}

export default Tasks;