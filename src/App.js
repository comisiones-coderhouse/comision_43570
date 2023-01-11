import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Main/Cart';
import ItemDetailContainer from './components/Main/ItemDetailContainer';


const App = () => {
    
    return (
        <BrowserRouter>
            <Navbar />
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
    );
};

export default App;