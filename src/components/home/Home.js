import React, { useState, useEffect } from "react";
import "./styles.css";
import produtos from "../../database/allProdutos.js";
import { FaCat, FaClinicMedical, FaBoxOpen, FaBoxes } from "react-icons/fa";

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
                <button id={categoria === 'todos'? "checked" : "" } onClick={() => setCategoria("todos")}><FaBoxes /> Todos</button>
                <button id={categoria === 'farmacia'? "checked" : "" } onClick={() => setCategoria("farmacia")}><FaClinicMedical /> Farmácia</button>
                <button id={categoria === 'pet'? "checked" : "" } onClick={() => setCategoria("pet")}><FaCat /> Pet</button>
                <button id={categoria === 'variedades'? "checked" : "" } onClick={() => setCategoria("variedades")}><FaBoxOpen /> Variedades</button>
            </div>
            <div className="produtos">
                {produtosHome?.map((produto) => (
                    <div className="produto" key={produto.id}>
                        <h2 className="prodName">{produto.nome}</h2>
                        <img className="prodImg" alt={produto.description} src={produto.image} />
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
