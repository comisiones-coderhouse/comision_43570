import { useContext } from "react";
import { contexto } from "../Context/CustomProvider";
import { serverTimestamp, addDoc } from "firebase/firestore";
import { ventasCollection } from "../../firebaseConfig";

const Cart = () => {

    //const value = useContext(contextObject)
    const { carrito, agregarProducto } = useContext(contexto)

    const handleClick = () => {
        agregarProducto()
    }

    const handleCompra = () => {
        //addDoc 
        const compra = {
            usuario: {
                nombre: "fulano",
                email: "fulano@gmail.com",
                telefono: "123456789"
            },
            carrito: carrito,
            fecha: serverTimestamp(),
        }

        const pedido = addDoc(ventasCollection, compra)

        pedido
            .then((resultado) => {
                console.log(resultado.id)
                console.log(resultado)
                //console.log(resultado.data())
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div>
            <h1>Este es el Carrito</h1>
            <button onClick={handleClick}>test carrito</button>
            {JSON.stringify(carrito)}
            <button onClick={handleCompra}>Finalizar Compra</button>
        </div>
    );
};

export default Cart;
