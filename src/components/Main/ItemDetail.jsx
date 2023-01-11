import React from 'react';
import Contador from './Contador';

const ItemDetail = ({ item }) => {
    
    const discount = item.price - (item.price * item.descuento) / 100;

    function handleClick(e){
        console.log(e)
        //e.target
        //e.preventDefault
        //e.stopPropagation
        //e.key
    }


    //const btn = document.querySelector("button")
    //document.addEventListener("click",handleClick())
    
    //btn.addEventListener("click",handleClick)
    //btn.addEventListener("click",()=>{})
    //btn.addEventListener("click",function(){})
    

    return (
        <div className="container-page container-detail">
            <img src={item.img} alt="detail" />

            <article>
                <h2>{item.title}</h2>
                <h4>{item.descuento}% OFF</h4>
                <section>
                    <h3>$ {discount}.-</h3>
                    <h5>$ {item.price}.-</h5>
                </section>
                <span className="info-span">
                    Todos los precios están expresados en Pesos
                </span>
                <hr />
                <h3 className="cuotas">
                    Hasta <strong>12</strong> cuotas sin interes de
                    <strong> ${item.price / 12}</strong>
                </h3>
                <input type="text"/>
                <button className="metodos-pagos" onClick={handleClick}>
                    Conocé todos los métodos de pagos
                </button>
                <hr />
                <Contador stock={10} />
            </article>
        </div>
    );
};

export default ItemDetail;
