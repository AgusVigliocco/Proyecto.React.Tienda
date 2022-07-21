import React from 'react'

const Item = ({ product }) => {

    return (
        < div className="card m-5 p-2" >
            <div className="card-body d-flex flex-column align-items-center">
                <h2 className="card-title">{product.Modelo}</h2>
                <img src={product.Imagen} alt="" />
                <p className="card-text">{product.Categoria}</p>
                <p className="card-text fs-5">{product.Precio}</p>
                <p className="card-text fs-5"> Stock Disponible: {product.Stock}</p>
                <a name="" id="" className="btn btn-primary m-3" href="#url" role="button">Detalle</a>
            </div>
        </div >

    )
}

export default Item


/*      */