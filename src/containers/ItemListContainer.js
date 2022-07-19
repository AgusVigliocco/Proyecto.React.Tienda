import React, { useState } from "react";

import products from "../data/MOCK_DATA.json"
import ItemList from "../components/ItemList"

const ItemListContainer = () => {

    const [productList, setProductList] = useState([])



    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
    myPromise.then(res => {
        setProductList(res);
    })

    return (
        <>

            <div className="d-flex flex-wrap justify-content-evenly">
                <ItemList items={productList} />
            </div>
        </>
    );
}

export default ItemListContainer;