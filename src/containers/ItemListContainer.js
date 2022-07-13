import React, { useState } from "react";
import ItemCount from "../components/ItemCount";
import products from "../data/MOCK_DATA.json"
import ItemList from "../components/ItemList"

const ItemListContainer = () => {

    const [productList, setProductList] = useState([])

    const onAdd = (parametro) => { alert("la cantidad comprada es:" + parametro) }

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 300);
    });
    myPromise.then(res => {
        setProductList(res);
    })



    return (
        <>
            <p>Item List Container</p>
            <ItemCount initial={0} stock={15} onAdd={onAdd} />
            <div className="d-flex flex-wrap justify-content-evenly">
                <ItemList items={productList} />
            </div>
        </>
    );
}

export default ItemListContainer;