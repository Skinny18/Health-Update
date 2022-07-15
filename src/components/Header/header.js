import React from "react";
import "./header.css";
import { Link} from 'react-router-dom';

function Header(){
    return(
        <>
        <nav className="navbar">
            <h1>My<span id="health">Health</span></h1>
        </nav>
        <div className="div-login">
            <div className="login"><Link to='/Login'><p>Login</p></Link></div>
        </div>
        </>
    )
}

export default Header;