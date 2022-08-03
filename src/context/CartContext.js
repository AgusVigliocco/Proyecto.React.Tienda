import React, { useState, useContext } from 'react'
const CartContext = React.createContext([]);


export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const limpiarCarrito = () => setCart([]);

    const dobleProducto = (id) => cart.find(product => product.Modelo === id) ? true : false;

    const borrarCarrito = (id) => setCart(cart.filter(product => product.Modelo !== id));

    const agregarCarrito = (item, quantity) => {
        if (dobleProducto(item.Modelo)) {
            setCart(
                cart.map((product) => {
                    return product.Modelo === item.id
                        ? { ...product, quantity: product.quantity + quantity }
                        : product;
                }),
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const totalProductos = () =>
        cart.reduce(
            (acumulador, productoActual) => acumulador + productoActual.quantity,
            0,
        );

    const precioTotal = () => {

        return cart.reduce((prev, producto) => prev + ((producto.Precio * producto.quantity) + ((producto.Precio * producto.quantity) * 0.21)), 0);
    }

    return (
        <CartContext.Provider value={{
            limpiarCarrito, dobleProducto, borrarCarrito, agregarCarrito, totalProductos, precioTotal,
            cart
        }}>

            {children}

        </CartContext.Provider>
    )
}

export default CartProvider;