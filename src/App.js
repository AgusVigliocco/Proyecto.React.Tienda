import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes >
        </ CartProvider>
      </BrowserRouter>
    </>

  );
};

export default App;