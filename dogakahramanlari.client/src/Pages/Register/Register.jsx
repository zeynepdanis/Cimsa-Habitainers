import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackIcon,
  Password,
  UserIcon
} from "../../assets/svg/icons";
import Background from "../Background/Background";
import { RegisterWrapper } from "./Register.style";

const Register = () => {
  const navigate = useNavigate();

  const backHomeHandler = () => {
    const newPath = '/';
    navigate(newPath);
  };

  return (
    <RegisterWrapper>
      <Background />
      <div className="register-container">
        <div className="input-container">
          <div className="header">KAYIT OL</div>
          <div className="input-part">

            <div className="input-area">
              <input className="input" placeholder="Ad" />
            </div>

            <div className="input-area">
              <input className="input" placeholder="Soyad" />
            </div>

            <div className="input-area">
              <UserIcon />
              <input className="input" placeholder="Kullanıcı Adı" />
            </div>


            <div className="input-area">
              <Password />
              <input type="password" className="input" placeholder="Şifre" />
            </div>

          </div>
        </div>
        <div className="button-container">
          <button onClick={backHomeHandler} className="back-icon">
            {" "}
            <BackIcon />{" "}
          </button>
          <button className="button">KAYIT OL</button>
        </div>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
