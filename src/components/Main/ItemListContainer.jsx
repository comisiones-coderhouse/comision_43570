import React, { useEffect, useState } from 'react';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { productsCollection } from '../../firebaseConfig';
import { getDocs , query , where } from "firebase/firestore"

//getDocs(Query)
//getDocs(CollectionReference|Query)
//query(CollectionReference, where(prop,comparador,val)  ,where(prop,comparador,val))


const ItemListContainer = ({ saludo }) => {
    
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = () => {

            //const pedido = getDocs(productsCollection)

            const filtro = query(productsCollection,where("categoria","==",categoryName))
            const pedidoPorCategoria = getDocs(filtro)

            pedidoPorCategoria
                .then((resultado) => {
                    const productos = resultado.docs.map((doc) => {
                        return { id : doc.id , ...doc.data() }
                    })
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })
        };

        getProducts()

    }, [categoryName]);


    return (
        <div id="fulano" className="container container-page">
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
