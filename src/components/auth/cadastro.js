import React from "react";
import "./styles.css";

const Cadastro = () => {
    
    return (
        <div className="modal-login">
            <div className="container-login">
                <form className="form-login">
                    <h1>Cadastro</h1>
                    <label>Nome</label>
                    <input type="text" placeholder="Nome" />
                    <label>Email</label>
                    <input type="text" placeholder="Email" />
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" />
                    <label>Confirmar Senha</label>
                    <input type="password" placeholder="Confirmar Senha" />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;