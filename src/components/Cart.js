import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

const Cart = () => {
    const { cart, precioTotal } = useCartContext()

    if (cart.length === 0) {
        return (
            <div className="container">
                <h1 className='text-light'>Carrito vacio</h1>
                <Link to="/">
                    <button type="button" className="btn btn-primary">
                        Volver al catalogo
                    </button>
                </Link>
            </div>
        )
    }

    return (
        < div className="card d-flex" >
            <div className='m-5 bg-danger fs-3'>
                Total: ${precioTotal().toFixed(2)}
            </div>
            <div className="card-body d-flex">
                {cart.map(product => <ItemCart key={product.id} item={product} />)}
            </div >
        </div >

    )
}

export default Cart