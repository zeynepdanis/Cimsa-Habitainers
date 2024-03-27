import { TasksWrapper } from './Tasks.style';
import keyImage from '../../assets/pngs/key.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Tasks = () => {
  const navigate = useNavigate();  
  const [tasks, setTasks] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [modalTask, setModalTask] = useState(null)
//   const [isChecked, setIsChecked] = useState(false);

  const handleDashboardClick = () => {
    const newPath = '/dashboard';
    navigate(newPath);
  };

  const openPopup = (task) => {
    setPopupOpen(true);
    setModalTask(task);
  }
  
  const closePopup = () => {
    setPopupOpen(false);
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
          } else {
            alert('Gorev tamamlama yapilamadi.')
          }
          closePopup();
       } catch (error) {
            console.log(error)
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
  },[]);

  return (
    <TasksWrapper>
        <div className='header'>
            <div className="home-icon" onClick={handleDashboardClick}>
                <img className="dashboard-image" src="icon/dashboard.png" alt="mainpage" />
            </div>
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
            <div className='task-part'>
                <div className='daily-task-container'>
                    <div>
                        {
                            tasks.map((task) => (
                               task.dateStatus === 0 
                               ?
                               <div onClick={() => openPopup(task)} className='task-row' key={task.id}>
                                 <input 
                                    type='checkbox' 
                                    onChange={() => checkHandler(task)}
                                    checked={task.dutyStatus === 1}
                                />   
                                 <div> {task.content} </div>
                               </div>
                               :
                               null
                            ))
                        }
                    </div>
                </div>
                <div className='weekly-task-container'>
                    <div>
                    {
                            tasks.map((task) => (
                               task.dateStatus === 1
                               ?
                               <div onClick={() => openPopup(task)} className='task-row' key={task.id}>
                                 <input 
                                    type='checkbox' 
                                    onChange={() => checkHandler(task)}
                                    checked={task.dutyStatus === 1}
                                 />   
                                 <div> {task.content} </div>
                               </div>
                               :
                               null
                            ))
                    }
                    {
                            isPopupOpen && modalTask && (
                                <div className="modal">
                                    <div className="popup-content">
                                    <h2>{modalTask.name} </h2>
                                    <p>{modalTask.content}</p>
                                    <button style={{ backgroundColor: 'green', marginLeft: "5px" }} onClick={() => checkHandler(modalTask)}>
                                        Tamamla
                                    </button>
                                    <button style={{ backgroundColor: 'red', marginLeft: "5px" }} onClick={closePopup}>
                                        Kapat
                                    </button>
                                    </div>
                                </div> )
                    }
                    </div>
                </div>
            </div>
        </div>
    </TasksWrapper>
  )
}

export default Tasks;