import React from "react";
import ItemCount from "../components/ItemCount";


const ItemDetail = ({ data }) => {

  const onAdd = (parametro) => { alert("la cantidad comprada es: " + parametro) }


  return (

    <div class="card p-5">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={data.Imagen} class="img-fluid rounded-start" alt={data.Modelo} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{data.Modelo}</h2>
            <h5 class="card-title">{data.Precio}</h5>
            <p class="card-text">Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ante id tortor condimentum placerat. Nullam eu aliquam quam. Quisque ullamcorper et mi non interdum. Proin ultrices tempus nulla, eu eleifend quam molestie at. Aliquam finibus scelerisque nisl, non cursus nisi accumsan in. Fusce facilisis, felis quis commodo condimentum, dui tortor lobortis mi, vel finibus diam quam id neque. Etiam in cursus nulla. Donec consectetur nec est quis consectetur..</p>
            <p class="card-text"><small class="text-muted">Stock: {data.Stock}</small></p>
          </div>
          <ItemCount initial={0} stock={data.Stock} onAdd={onAdd} />
        </div>
      </div>
    </div>

  )


  /*     <div className="container flex-column text-center ">
      <h1>{data.Modelo}</h1>
      <img src={data.Imagen} alt={data.Modelo} />
      <h3>Stock: {data.Stock}</h3>
      <h2>Precio: {data.Precio}</h2>
      <ItemCount initial={0} Stock={10} onAdd={onAdd} />
    </div> */

}

export default ItemDetail;