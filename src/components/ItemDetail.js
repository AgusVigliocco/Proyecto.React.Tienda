import React from "react";
import ItemCount from "../components/ItemCount";

export const ItemDetail = ({ data }) => {

  const onAdd = (parametro) => { alert("la cantidad comprada es: " + parametro) }

  return (
    <div className="container flex-column text-center">
      <h1>{data.modelo}</h1>
      <img src={data.imagen} alt={data.modelo} />
      <h2> Color: {data.color}</h2>
      <h3>Stock: {data.stock}</h3>
      <h2>Precio: {data.precio}</h2>
      <ItemCount initial={0} stock={10} onAdd={onAdd} />
    </div>
  )

}

export default ItemDetail;