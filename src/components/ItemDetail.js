import React from "react";
import ItemCount from "../components/ItemCount";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ data }) => {
  const [itemCount, setItemCount] = useState(0);
  const { agregarCarrito } = useCartContext();

  const onAdd = (quantity) => {
    alert("Agregaste " + quantity + " " + data.Modelo);
    setItemCount(quantity)
    agregarCarrito(data, quantity);
  }

  return (

    <div className="card p-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.Imagen} className="img-detalle" alt={data.Modelo} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{data.Modelo}</h2>
            <h5 className="card-title">{data.Precio}</h5>
            <p className="card-text">Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ante id tortor condimentum placerat. Nullam eu aliquam quam. Quisque ullamcorper et mi non interdum. Proin ultrices tempus nulla, eu eleifend quam molestie at. Aliquam finibus scelerisque nisl, non cursus nisi accumsan in. Fusce facilisis, felis quis commodo condimentum, dui tortor lobortis mi, vel finibus diam quam id neque. Etiam in cursus nulla. Donec consectetur nec est quis consectetur..</p>
            <p className="card-text"><small className="text-muted">Stock: {data.Stock}</small></p>
          </div>
          {
            itemCount === 0
              ? <ItemCount stock={data.Stock} initial={itemCount} onAdd={onAdd} />
              : <Link to="/carrito"><button className="btn btn-primary">Agregar al carrito</button></Link>
          }
        </div>
      </div>
    </div>

  )

}

export default ItemDetail;