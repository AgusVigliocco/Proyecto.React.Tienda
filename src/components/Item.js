import React from 'react'
import ItemCount from './ItemCount'


const Item = ({ product }) => {

    return (
        <div className="card m-5 ">
            <img className="img-thumbnail" src={product.Imagen} alt="Title" />
            <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title">{product.Modelo}</h4>
                <p className="card-text">{product.Color}</p>
                <p className="card-text">{product.Precio}</p>
                <p className="card-text"> Stock Disponible: {product.Stock}</p>
                <a name="" id="" className="btn btn-primary" href="#url" role="button">Detalle</a>
                <div className='m-3'>
                    <ItemCount />
                </div>

            </div>
        </div>



    )
}

export default Item