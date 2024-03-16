import React from "react";
import Background from "../Background/Background";
import { RegisterWrapper } from "./Register.style";
import {
  EmailIcon,
  BackIcon,
  Password,
  UserIcon,
  UnlockIcon,
} from "../../assets/svg/icons";

const Register = () => {
  return (
    <RegisterWrapper>
      <Background />
      <div className="register-container">
        <div className="input-container">
          <div className="header">KAYIT OL</div>
          <div className="input-part">
            <div className="input-area">
              <UserIcon />
              <input className="input" placeholder="Kullanıcı Adı" />
            </div>
            <div className="input-area">
              <EmailIcon />
              <input
                type="email"
                className="input"
                placeholder="E-posta Adresi"
              />
            </div>

            <div className="input-area">
              <Password />
              <input type="password" className="input" placeholder="Şifre" />
            </div>
            <div className="input-area">
              <UnlockIcon />
              <input
                type="password"
                className="input"
                placeholder="Şifre Tekrarı"
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="back-icon">
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
