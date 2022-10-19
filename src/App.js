import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Login from './components/auth/login';
import Cadastro from './components/auth/cadastro';


function App() {
  const [selecionar, setSelecionar] = useState([]);
  const [showCart, setShowCart] = useState(false);

  //funcao adiciona index do produto selecionado no array selecionar
  const setProduto = (id) => {
    if(!selecionar.includes(id)){
    setSelecionar([...selecionar, id]);
  };
}

  console.log(selecionar);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />}  />
          <Route path="/home" element={
            <>
              <Header 
                produto={selecionar}
                setShowCart={setShowCart}
              />
              <div className='home-page'>
                <Home setProduto={setProduto} />
                {showCart && <Cart setShowCart={setShowCart} produtosCart={selecionar} />}
              </div> 
            </>
          }/>
          <Route path="/cart" element={<Cart selecionar={selecionar} />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
