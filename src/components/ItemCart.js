import React from "react";
import '../App.css';
import { useCartContext } from "../context/CartContext";


const ItemCart = ({ item }) => {
    const { borrarCarrito } = useCartContext()
    const impuestos = (item.Precio * item.quantity) * 0.21;
    return (
        <div className="card m-4">
            <img className="img-carrito" src={item.Imagen} alt={item.Modelo} />
            <div className="">
                <p>Modelo: <strong>{item.Modelo}</strong></p>
                <p>Cantidad: <strong>{item.quantity}</strong></p>
                <p>Precio por unidad: <strong>${item.Precio}</strong></p>
                <p>Subtotal: <strong>${(item.Precio * item.quantity).toFixed(2)}</strong> </p>
                <p>Impuestos: <strong>${(impuestos).toFixed(2)}</strong> </p>
                <p>Precio total: <strong>${((item.Precio * item.quantity) + impuestos).toFixed(2)}</strong></p>
                <div>
                    <button onClick={() => borrarCarrito(item.Modelo)} type="button" className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}








export default ItemCart;