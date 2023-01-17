import { useState } from 'react';


const Contador = ({ stock , handleAdd }) => {

    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleConfirmar = () => {
        handleAdd(cantidad)
    }

    return (
        <div className="container-counter">
            <div className="counter">
                <button onClick={restar}>-</button>
                <p>{cantidad}</p>
                <button disabled={cantidad === stock} onClick={sumar}>
                    +
                </button>
            </div>
            <button className="add-to-cart" onClick={handleConfirmar}>Confirmar</button>
        </div>
    );
};

export default Contador;
