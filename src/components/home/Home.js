import React, { useState, useEffect } from "react";
import "./styles.css";
import produtos from "../../database/allProdutos.js";

function Home({ setProduto }) {
    const [produtosHome, setProdutosHome] = useState([]);
    const [categoria, setCategoria] = useState("todos");
    //filtrar produtos por categoria

    useEffect(() => {
        if(categoria === "todos"){
        setProdutosHome(produtos);
        } else {
        setProdutosHome(produtos.filter(produtos => produtos.sector === categoria));
        } ;
    }, [categoria]);

    return (
        <div className="home">
        <div className="categorias">
            <button onClick={() => setCategoria("todos")}>Todos</button>
            <button onClick={() => setCategoria("home")}>home</button>
            <button onClick={() => setCategoria("farmacia")}>farmacia</button>
            <button onClick={() => setCategoria("pet")}>pet</button>
            <button onClick={() => setCategoria("variedades")}>variedades</button>
        </div>
        <p className="productDescription">{categoria}</p>
        <div className="produtos">
            {produtosHome?.map((produto) => (
                <div className="produto" key={produto.id}>
                    <h2 className="prodName">{produto.nome}</h2>
                    <img className="prodImg" src={produto.image} />
                    <p className="prodPrice">{produto.price}</p>
                    <p className="prodDesc">{produto.description}</p>
                    <div className="comprar">
                        <button className="buy" onClick={ () => setProduto(produto.id)}>Comprar</button>
                    </div>
                </div>
            ))} 
        </div>
        </div>
    );
}

export default Home;
