// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BackIcon,
//   Password,
//   UserIcon
// } from "../../assets/svg/icons";
// import Background from "../Background/Background";
// import { RegisterWrapper } from "./Register.style";

// const Register = () => {
//   const navigate = useNavigate();

//   const backHomeHandler = () => {
//     const newPath = '/';
//     navigate(newPath);
//   };

//   return (
//     <RegisterWrapper>
//       <Background />
//       <div className="register-container">
//         <div className="input-container">
//           <div className="header">KAYIT OL</div>
//           <div className="input-part">

//             <div className="input-area">
//               <input className="input" placeholder="Ad" />
//             </div>

//             <div className="input-area">
//               <input className="input" placeholder="Soyad" />
//             </div>

//             <div className="input-area">
//               <UserIcon />
//               <input className="input" placeholder="Kullanıcı Adı" />
//             </div>


//             <div className="input-area">
//               <Password />
//               <input type="password" className="input" placeholder="Şifre" />
//             </div>

//           </div>
//         </div>
//         <div className="button-container">
//           <button onClick={backHomeHandler} className="back-icon">
//             {" "}
//             <BackIcon />{" "}
//           </button>
//           <button className="button">KAYIT OL</button>
//         </div>
//       </div>
//     </RegisterWrapper>
//   );
// };

// export default Register;



import { useState } from "react";
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    roles: ["teacher"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async () => {
    try {
      const response = await fetch("http://localhost:5120/api/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Başarılı kayıt durumu
        // İsteğe göre yönlendirme yapabilirsiniz
        navigate("/");
      } else {
        // Hata durumu
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        // Hata durumunu kullanıcıya gösterebilirsiniz
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

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
              <input className="input" placeholder="Ad" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>

            <div className="input-area">
              <input className="input" placeholder="Soyad" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="input-area">
              <UserIcon />
              <input className="input" placeholder="Kullanıcı Adı" name="userName" value={formData.userName} onChange={handleChange} />
            </div>

            <div className="input-area">
              <Password />
              <input type="password" className="input" placeholder="Şifre" name="password" value={formData.password} onChange={handleChange} />
            </div>

          </div>
        </div>
        <div className="button-container">
          <button onClick={backHomeHandler} className="back-icon">
            <BackIcon />
          </button>
          <button onClick={registerUser} className="button">KAYIT OL</button>
        </div>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
