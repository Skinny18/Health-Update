import React from "react";
import "./logclient.css";
import { Link } from 'react-router-dom';





function LogClient(){
    return(
        <>
            <div className="log-div">
                <h1>Login</h1>
                <label for="email">E-mail</label>
                <br/>
                <input className="email" type="email" name="email" />
                <br/>

                <label for="password">Senha</label>
                <br/>
                <input className="password" type="password" name="password"/>
                <br/>

                <Link to="/cadastro">
                <input type="submit" className="submit" value="Login"/>
                </Link>
            </div>
        </>
    )
}

export default LogClient;