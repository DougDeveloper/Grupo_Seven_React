import React, { useEffect, useState } from "react";
import "./styles.css";

function CartItem({produto, handleRemove, setTotal, total}) {
    const [totalProduto, setTotalProduto] = useState(1);
    const [quantidade, setQuantidade] = useState(1);

    useEffect(() => {
        console.log(totalProduto);
        console.log(quantidade);
        setTotalProduto(produto.price * quantidade);
    }, [quantidade]);

    const removeValue = () => {
        if (quantidade > 1) {
            setTotal(total-produto.price);
            return setQuantidade(quantidade - 1);
        }
        handleRemove(produto.id);
    }
    const addValue = () => {
        setTotal(total+produto.price);
        setQuantidade(quantidade + 1);
    }



  return (
    <div className="produto-cart" key={produto.id}>
        <div className="produto-info">
            <p>{produto.description}</p>
            <p>R$ {produto.price}</p>
        </div>
        <div className="produto-eventos">
            <button onClick={() => removeValue()}>-</button>
            <p>{`Q: ${quantidade} T:${totalProduto}`}</p>
            <button onClick={() => addValue()} >+</button>
        </div>
    </div>
  );
}

export default CartItem;