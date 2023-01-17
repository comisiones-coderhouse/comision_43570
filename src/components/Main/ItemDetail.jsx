import React, { useContext, useState } from 'react';
import { contexto } from '../Context/CustomProvider';
import Contador from './Contador';

const ItemDetail = ({ item }) => {

    const discount = item.price - (item.price * item.descuento) / 100;

    const [confirmado, setConfirmado] = useState(false)
    const { agregarProducto } = useContext(contexto)
    const [cantidadLocal, setCantidadLocal] = useState(1)

    const handleAdd = (cantidad) => {
        setCantidadLocal(cantidad)
        setConfirmado(true)
    }

    const handleClick = () => {
        agregarProducto(item, cantidadLocal)
    }


 



    return (
        <div className="container-page container-detail">
            <img src={item.img} alt="detail" />
            <article>
                <h2>{item.title}</h2>
                <h4 className={confirmado ? "rojo" : "azul"}>{item.descuento}% OFF</h4>
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
                <hr />
                <Contador stock={10} handleAdd={handleAdd} />
                {/* if(confirmado) return <button/> */}
                {/* if(condicion) { return x } else { return y }  */}
                {confirmado && <button onClick={handleClick}>Agregar al carrito</button>}
            </article>
        </div>
    );
};

export default ItemDetail;