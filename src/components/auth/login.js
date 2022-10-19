import React from "react";
import { redirect } from "react-router-dom";
import "./styles.css";

const Login = ({setShowLogin}) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //adiconado email e senha no localstorage
        if(email && password){
            localStorage.setItem("email", email);
            localStorage.setItem("logado", true);
            setShowLogin(false);
        }
    }
    const redirectCadastro = () => {
        setShowLogin(false);
        redirect("/cadastro");
    }


    return (
        <div className="modal-login">
            <div className="container-login">
                <form className="form-login">
                    <h1>Login</h1>
                    <input 
                    type="text" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">Entrar</button>
                    <button onClick={() => redirectCadastro()} type="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
    }

export default Login;
