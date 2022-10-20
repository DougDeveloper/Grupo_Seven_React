import React, { useState, useEffect } from "react";
import "./styles.css";
import variedadeProdutos from "../../database/vitrineProdutos.js";

function Vitrine({ setProduto }) {
    const [produtosPet, setProdutosPet] = useState([]);
    const [produtosFarmacia, setProdutosFarmacia] = useState([]);
    const [produtosVariedades, setProdutosVariedades] = useState([]);


    useEffect(() => {
        setProdutosPet(variedadeProdutos.filter(produtos => produtos.sector === "pet"));
        setProdutosFarmacia(variedadeProdutos.filter(produtos => produtos.sector === "farmacia"));
        setProdutosVariedades(variedadeProdutos.filter(produtos => produtos.sector === "variedades"));
    }, []);



    return (
        <div className="home">
            <h2>Pet</h2>
            <div className="produtos">
                {produtosPet?.map((produto) => (
                    <div className="produto" key={produto.id}>
                        <img src={produto.image} alt={produto.name} />
                        <h3>{produto.name}</h3>
                        <p>{produto.price}</p>
                        <button onClick={() => setProduto(produto.id)}>Comprar</button>
                    </div >
                ))}
            </div>
            <h2>variedades</h2>
            <div className="produtos">
            {produtosVariedades?.map((produto) => (
                    <div className="produto" key={produto.id}>
                        <img src={produto.image} alt={produto.name} />
                        <h3>{produto.name}</h3>
                        <p>{produto.price}</p>
                        <button onClick={() => setProduto(produto.id)}>Comprar</button>
                    </div >
                ))}
            </div>
            <h2>farmácia</h2>
            <div className="produtos">
            {produtosFarmacia?.map((produto) => (
                    <div className="produto" key={produto.id}>
                        <img src={produto.image} alt={produto.name} />
                        <h3>{produto.name}</h3>
                        <p>{produto.price}</p>
                        <button onClick={() => setProduto(produto.id)}>Comprar</button>
                    </div >
                ))}
            </div>
        </div>
    );
    }

export default Vitrine;
