//la funcion initializeApp sirve para establecer una conexion con firebase
import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: "comision-43570.firebaseapp.com",
    projectId: "comision-43570",
    storageBucket: "comision-43570.appspot.com",
    messagingSenderId: "621912617987",
    appId: "1:621912617987:web:7e975cbed14d1292ac8a36"
}

const app = initializeApp(firebaseConfig) //FirebaseApp
const db = getFirestore(app) //Firestore
export const productsCollection = collection(db,"productos") // CollectionReference/Query
export const ventasCollection = collection(db,"ventas") // CollectionReference/Query

//1- ir a la pagina de firebase : npm i firebase
//2- me logueo : initializeApp(configObject)
//3- accedo a la base de datos : getFirestor(FirebaseApp)
//4- accedo a la coleccion que quiero operar : collection(Firestore,string)