import React from 'react'
import backgroundImage from '../../assets/pngs/background.jpg';
import { LoginWrapper } from '../Login/Login.style';


const Background = () => {
  return (
    <LoginWrapper>
        <img className='background blur' src={backgroundImage}/>
    </LoginWrapper>
  )
}

export default Background