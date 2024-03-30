import { HomeIcon, KeyIcon } from '../../assets/svg/icons';
import { TasksWrapper } from './Tasks.style';
import keyImage from '../../assets/pngs/key.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Tasks = () => {
  const navigate = useNavigate();  
  const [tasks, setTasks] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [modalTask, setModalTask] = useState(null)
  const [keyNumber, setKeyNumber] = useState(0);
  const userId = localStorage.getItem('userId');
  //   const [isChecked, setIsChecked] = useState(false);

  const backDashboard = () => {
    const newPath = '/dashboard';
    navigate(newPath);
  };

  const openPopup = (task) => {
    if(task.dutyStatus === 0) {
        setPopupOpen(true);
        setModalTask(task);
    }
    else {
        setPopupOpen(false);
    }

  }
  
  const closePopup = () => {
    setPopupOpen(false);
  };

  const getKeyNumber = async () => {
    try {
      const response = await fetch(`http://localhost:5120/api/userKeys/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data.numberOfKeys);
      setKeyNumber(data.numberOfKeys);
    } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
    }
  };

  const checkHandler = async (task) => {
        const newDutyStatus = task.dutyStatus === 0 ? 1 : 0;
        const updatedTask = { ...task, dutyStatus: newDutyStatus };
       try {
        const response = await fetch(`http://localhost:5120/api/duties/${task.id}`, { 
            method: 'PUT', 
            headers: { 
              'Content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedTask) 
          });
          if(response.status >= 200 && response.status <= 299) {
            setTasks(prevTasks => prevTasks.map(prevTask => prevTask.id === updatedTask.id ? updatedTask : prevTask));
            updateKeyNumber();
          } else {
            alert('Gorev tamamlama yapilamadi.')
          }
          closePopup();
       } catch (error) {
            console.log(error)
       }
  };

  const updateKeyNumber = async () => {
    const updateKey = {id: userId , numberOfKeys: keyNumber};
    try {
        const keyRes = await fetch(`http://localhost:5120/api/userKeys/${userId}`, {
            method: 'PUT',
            headers: { 
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(updateKey) 
        })
        if(keyRes.status >= 200 && keyRes.status <= 299) {
            const newKeyNumber = keyNumber + 3;
            setKeyNumber(newKeyNumber);
        }else {
            alert('Anahtar sayisi guncellenemedi.')
          }
    } catch (error) {
        console.log(error);
    }

  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch('http://localhost:5120/api/duties', {
            method: 'GET'
        })
        const result = await response.json();
        setTasks(result);
      } catch (error) {
        console.log(error)
      }
    };
    getTasks();
    getKeyNumber();
    console.log(keyNumber,'keynumbe')
  },[]);

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
                    onClick={() => navigate('/cages')}
                >
                    Hayvanlar
                </button>
                <button
                    className='page-buttons'
                    onClick={() => navigate('/forest')}
                >
                    Orman
                </button>
            </div>
            <div className='key-number'>
                <span>{keyNumber}</span> 
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