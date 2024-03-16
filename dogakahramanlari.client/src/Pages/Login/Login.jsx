import { useState } from 'react'
import Background from '../Background/Background';
import { LoginWrapper } from './Login.style';
import { BackIcon, Password, UserIcon } from '../../assets/svg/icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const usernameHandler = (e) => {
        const usernameData = e.target.value;
        setLoginData({...loginData , username: usernameData});
    };

    const passwordHandler = (e) => {
        const passwordData = e.target.value;
        setLoginData({...loginData , password: passwordData});
    };
    
    const backHomeHandler = () => {
        const newPath = '/';
        navigate(newPath);
    };

    const loginHandler = async () => {
        try {
            const loginRequest = await fetch('http://localhost:5120/api/authentication/login', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: loginData.username, password: loginData.password})
              });
              const content = await loginRequest.json();
              console.log(content)
              window.localStorage.setItem('token', content.accessToken);
              navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert('Giriş Yapılamadı');
        }
    };

  return (
    <LoginWrapper>
        <Background />
        <div className='login-container'>
            <div className='input-container'>
                <div className='header'>
                    GİRİŞ YAP
                </div>
                <div className='input-part'>
                    <div className='input-area'>
                        <UserIcon />
                        <input 
                            className='input' 
                            placeholder='Kullanıcı Adı'
                            onChange={(e) => usernameHandler(e)}
                        />
                    </div>
                    <div className='input-area'>
                        <Password />
                        <input 
                            type='password' 
                            className='input' 
                            placeholder='Şifre'
                            onChange={(e) => passwordHandler(e)}
                        />
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <button onClick={backHomeHandler} className='back-icon'> <BackIcon /> </button>
                <button onClick={loginHandler} className='button'>Girişi Tamamla</button>
            </div>
        </div>
    </LoginWrapper>
  )
}

export default Login;