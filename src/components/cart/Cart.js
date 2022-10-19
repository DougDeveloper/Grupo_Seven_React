import React, { useEffect, useState } from "react";
import "./styles.css";
import produtos from "../../database/allProdutos.js";

function Cart({setShowCart, produtosCart}) {
    //selecionar produtos do pelo array de id
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    useEffect(() => {
        if(produtosCart.length === 0){
            setProdutosSelecionados([]);
        }
        else {
            setProdutosSelecionados(produtos.filter(produto => produtosCart.includes(produto.id)));
        }
        
    }, [produtosCart]);

  return (
    <div className="cart">
        <div className="header-cart">
            <h1>Produtos</h1>
            <button onClick={() => setShowCart(false)}>X</button>
        </div>
        <div className="produtos-cart">
            {produtosSelecionados?.map((produto) => (
                <div className="produto-cart" key={produto.id}>
                    <div className="produto-info">
                        <p>{produto.description}</p>
                        <p>{produto.price}</p>
                    </div>
                    <div className="produto-eventos">
                        <button>-</button>
                        <p>{`total produtos: ${produto.price*10}`}</p>
                        <button>+</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="final-cart">
            <p>Total: R$ 0,00</p>
            <button>Finalizar compra</button>
        </div>
    </div>
  );
}

export default Cart;