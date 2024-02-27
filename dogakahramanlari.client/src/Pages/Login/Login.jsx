import React from 'react'
import Background from '../Background/Background';
import { LoginWrapper } from './Login.style';
import { BackIcon, Password, UserIcon } from '../../assets/svg/icons';

const Login = () => {
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
                        <input className='input' placeholder='Kullanıcı Adı'/>
                    </div>
                    <div className='input-area'>
                        <Password />
                        <input type='password' className='input' placeholder='Şifre'/>
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <button className='back-icon'> <BackIcon /> </button>
                <button className='button'>Girişi Tamamla</button>
            </div>
        </div>
    </LoginWrapper>
  )
}

export default Login;