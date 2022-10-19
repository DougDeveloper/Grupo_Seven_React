//Component header React js

import React, {useEffect, useState} from 'react';
import './styles.css';
import { BiCartAlt, BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { Navigate } from 'react-router-dom';
import Login from '../auth/login';

function Header({produto, setShowCart}) {
    const [alerta, setAlerta] = useState('nao');
    const [logado, setLogado] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        localStorage.getItem('logado') === 'true' ? setLogado(true) : setLogado(false);
    }, [logado]);

    useEffect(() => {
    if(produto.length === 0){
        setAlerta('nao');
    } else {
        setAlerta('sim');
    }
    }, [produto]);

    const singOut = () => {
        localStorage.setItem('logado', false);
        setLogado(false);
    }
    function singIn() {
        setShowLogin(true);
    }


    

    return (
        <div className="header">
            <h1>E-commerce Maggot</h1>
            <div>
                {logado?
                <button onClick={() => singOut()} className={`button-login`} >
                    sair
                    <BiLogInCircle />
                </button>
                : 
                <button onClick={() =>singIn()} className={`button-login`} >
                    entrar
                <BiLogOutCircle />
                </button>
                }
                <button onClick={() => {setShowCart(true)}} className={`alerta alerta-${alerta}`} >
                    <BiCartAlt />
                </button>
            </div>
            {showLogin && <Login setShowLogin={setShowLogin} />}
        </div>
    );
}

export default Header;