import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto


const CarritoProvider = ({ children }) => {

    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidad,setCantidad] = useState(0)
    
    const agregarProducto = (producto,cantidad) => {

        //carrito === [{id:1,title : "pantalon",cantidad:1}]

        //const copia = producto 
        producto.cantidad = cantidad

        setCarrito([producto])
        setTotal(producto.precio * cantidad)
        setCantidad(cantidad)
    }

    const eliminarProducto = () => {}

    const vaciarCarrito = () => {}

    const estaEnCarrito = () => {
        //retorna true o false dependiendo si un producto dado esta o no en carrito
    }

    //valorDelContexto = la variable que tiene todo lo que se puede usar desde cualquier otro componente con el useContext
    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        agregarProducto,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider