import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./styles.css";
import produtos from "../../database/allProdutos.js";

function Cart({setShowCart, produtosCart}) {
    //selecionar produtos do pelo array de id
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if(produtosCart.length === 0){
            setProdutosSelecionados([]);
        }
        else {
            setProdutosSelecionados(produtos.filter(produto => produtosCart.includes(produto.id)));
        }
        
    }, [produtosCart]);

    const handleRemove = (id) => {
        setProdutosSelecionados(produtosSelecionados.filter(produto => produto.id !== id));
    }

    const handleTotal = (totalProduto) => {
        setTotal(total + totalProduto);
    }
    // atualizar total assim que o componente for montado
    useEffect(() => {
        setTotal(produtosSelecionados.reduce((total, produto) => total + produto.price, 0));
    }, [produtosSelecionados]);
    


  return (
    <div className="cart">
        <div className="header-cart">
            <h1>Produtos</h1>
            <button onClick={() => setShowCart(false)}>X</button>
        </div>
        <div className="produtos-cart">
            {produtosSelecionados?.map((produto) => (
                <CartItem 
                key={produto.id} 
                produto={produto} 
                handleRemove={handleRemove}
                setTotal={setTotal}
                setProdutosSelecionados={setProdutosSelecionados}
                produtosCart={produtosCart}
                total={total}
                />
            ))}
        </div>
        <div className="final-cart">
            <p>Total: R$ {total? total : null }</p>
            <button>Finalizar compra</button>
        </div>
    </div>
  );
}

export default Cart;