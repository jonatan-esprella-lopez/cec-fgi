import { useAuth } from "../../auth/AuthProvider.tsx";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/Register.css";
import { API_URL } from "../../auth/constans.jsx";

import Header from "../../componets/Header_Main.jsx"
import Footer from "../../componets/Footer_Main.jsx"

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [identityCard, setIdentityCard] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [celular, setCelular] = useState("");

  const [errorResponse, setErrorResponse] = useState("");


  const { isAuthenticated } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    try {
      setName(username);
      const response = await fetch(`${API_URL}/registro`,{
        method: "POST",
        headers:  {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          username,
          password
       })
      })
      if (response.ok) {
        console.log("Usuario creado correctamente");
      }else{
        console.log("Ocurrio algun error: ");
        const  json = await response.json;
      }
    } catch (error) {
      console.log("error de no auth", error);
    }
  };
  if (isAuthenticated){
    return <Navigate to="/PerfilUser"/>;
  }
  return (
    <div>
        <Header/>
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="identityCard">Carnet de identidad</label>
          <input
            type="text"
            id="identityCard"
            name="identityCard"
            value={identityCard}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Fecha de nacimiento</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={fechaNacimiento}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Género</label>
          <select
            id="gender"
            name="gender"
            value={genero}
            onChange={handleChange}
            
          >
            <option value="">Seleccionar</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Celular</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={celular}
            onChange={handleChange}
            
          />
        </div>
        <button type="submit" className="btn-register">
          Registrarse
        </button>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </form>
    </div>
   <Footer/> 
    </div>
  );
}

export default Register;
