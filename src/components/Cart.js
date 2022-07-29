import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

const Cart = () => {
    const { cart, precioTotal } = useCartContext()

    if (cart.length === 0) {
        return (
            <div className="container">
                <h1>Carrito vacio</h1>
                <Link to="/">Volver a la tienda</Link>
            </div>
        )
    }

    return (
        < div className="card m-5 p-2" >
            <div className="card-body d-flex flex-column align-items-center">
                {cart.map(product => <ItemCart key={product.id} item={product} />)}
                <p>Total: ${precioTotal()}</p>
            </div >

        </div >

    )
}

export default Cart