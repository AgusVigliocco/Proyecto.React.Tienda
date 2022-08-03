import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

const Cart = () => {
    const { cart, precioTotal } = useCartContext()

    if (cart.length === 0) {
        return (
            <div className="container d-flex flex-column align-items-center">
                <p className='h3'>Carrito vacio</p>
                <Link to="/">
                    <button type="button" className="btn btn-primary m-3">
                        Volver al catalogo
                    </button>
                </Link>
                <img src="https://www.editorialparalelo28.com/images/cartEmpty.png" className="img-carrito-vacio rounded-top" alt="" />
            </div>
        )
    }

    return (
        < div className="card d-flex align-items-center" >
            <div className='m-5 bg-danger fs-3'>
                Total: ${precioTotal().toFixed(2)}
            </div>
            <Link to="/">
                <button type="button" className="btn btn-primary">
                    Seguir comprando
                </button>
            </Link>
            <div className="card-body d-flex">
                {cart.map(product => <ItemCart key={product.Modelo} item={product} />)}
            </div >

        </div >

    )
}

export default Cart