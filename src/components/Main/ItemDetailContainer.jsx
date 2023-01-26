import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore"
import { productsCollection } from '../../firebaseConfig';

//getDoc(DocumentReference)
//doc(db,idDoc) DocumentReference 
//doc(collection,idDoc) DocumentReference 

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [cargando,setCargando] = useState(true)

    const valor = useParams();

    useEffect(() => {
        const getProduct = () => {
            
            const referenciaDoc = doc(productsCollection,"qTBUheeV9HM1qR4jV0Wj")
            const pedido = getDoc(referenciaDoc)

            pedido
                .then((resultado) => {
                    const producto = resultado.data()
                    setItem(producto)
                    setCargando(false)
                })
                .catch((error) => {
                    console.log(error)
                })
        };

        getProduct()

    }, []);

    return <>{!cargando ? <ItemDetail item={item} /> : <p>Cargando...</p>}</>;
};

export default ItemDetailContainer;
