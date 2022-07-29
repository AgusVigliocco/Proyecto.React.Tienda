import React from "react";
import '../App.css';
import { useCartContext } from "../context/CartContext";


const ItemCart = ({ item }) => {
    const { borrarCarrito } = useCartContext()
    return (
        <div className="card m-4 img-carrito">
            <img className="img-thumbnail " src={item.Imagen} alt={item.Modelo} />
            <div className="card-body">
                <p>Modelo: {item.Modelo}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio por unidad: {item.Precio}</p>
                <p>Subtotal: ${item.Precio * item.quantity} </p>
                <div>
                    <button onClick={() => borrarCarrito(item.Modelo)} type="button" name="" id="" className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}








export default ItemCart;