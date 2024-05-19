import React from "react";
import { Link } from 'react-router-dom';

function LoginRegister(){
    const links = [
        { path: "/login", label: "Iniciar sesion", specialClass: "Link_Login" },
        { path: "/registro", label: "Registro", specialClass: "Link_Register" }
      ];

    
    return( 
        <> 
        {links.map(link => (
            <p >
            <Link key={link.path} to={link.path} className={`Link_Paginas ${link.specialClass || ''}`}>
                {link.label} 
            </Link>
          </p>
        ))}
        </>
    )
}
export default LoginRegister