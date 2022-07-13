import React from "react";
import ItemCount from "../components/ItemCount";



const ItemListContainer = () => {
    const onAdd = (parametro) => {
        alert   ("la cantidad comprada es:" + parametro);
    }
    return (
        <div>       
           <p>Item List Container</p> 
            <ItemCount initial={0} stock={15} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;