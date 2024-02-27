import React from 'react'
import backgroundImage from '../../assets/pngs/background.jpg';
import { BackgroundWrapper } from '../Login/Login.style';


const Background = () => {
  return (
    <BackgroundWrapper>
        <img className='background blur' src={backgroundImage}/>
    </BackgroundWrapper>
  )
};

export default Background;