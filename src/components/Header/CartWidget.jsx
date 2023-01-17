import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { contexto } from "../Context/CustomProvider"

const CartWidget = () => {

    const { cantidad } = useContext(contexto)

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <AiOutlineShoppingCart size={27} color="white" />
            <span>{cantidad}</span>
        </div>
    );
};

export default CartWidget;
