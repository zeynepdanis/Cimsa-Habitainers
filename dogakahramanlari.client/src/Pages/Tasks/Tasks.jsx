import { HomeIcon, KeyIcon } from '../../assets/svg/icons';
import { TasksWrapper } from './Tasks.style';
import {keyImage} from '../../assets/pngs/key.png'

const Tasks = () => {
  return (
    <TasksWrapper>
        <div className='header'>
            <button
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
                <img src='keyImage' />
            </div>
        </div>
    </TasksWrapper>
  )
}

export default Tasks