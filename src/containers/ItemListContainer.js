import React, { useState } from "react";
import products from "../data/MOCK_DATA.json"
import ItemList from "../components/ItemList"
import { useParams } from "react-router";

const ItemListContainer = () => {

    const [productList, setProductList] = useState([])
    const { id } = useParams()

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === undefined) {
                resolve(products)
                    .then(res => setProductList(res))
                    .catch(err => console.log(err))
            } else {
                resolve(products.filter(products => products.Categoria === id))
                    .then(res => setProductList(res))
                    .catch(err => console.log(err))
            }
        }, 10);
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