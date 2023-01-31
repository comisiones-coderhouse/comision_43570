import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Main/Cart';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import CustomProvider from "./components/Context/CustomProvider"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';

const App = () => {

    return (
        <CustomProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer saludo="Bienvenidos al mejor sitio para comprar 😎" />
                        }
                    />
                    <Route
                        path="/categoria/:categoryName"
                        element={
                            <ItemListContainer saludo="Bienvenidos al mejor sitio para comprar 😎" />
                        }
                    />
                    <Route path="/detail/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            <ToastContainer autoClose={1000} />
        </CustomProvider>
    );
};

export default App;