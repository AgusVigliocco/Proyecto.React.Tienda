import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ product }) => {


    return (
        < div className="card m-5 p-2" >
            <div className="card-body d-flex flex-column align-items-center">
                <h2 className="card-title">{product.Modelo}</h2>
                <img src={product.Imagen} alt="" />
                <p className="card-text">{product.Categoria}</p>
                <p className="card-text fs-5"><strong>${product.Precio}</strong></p>
                <p className="card-text fs-5"> Stock Disponible: {product.Stock}</p>
                <Link to={`/item/${product.Modelo}`}><button className="btn btn-secondary" >Mas detalles</button></Link>
            </div>
        </div >

    )
}

export default Item