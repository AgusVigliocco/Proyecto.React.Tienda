import React, { useState } from "react";
import item from "../data/MOCK_DATA.json"
import ItemList from "../components/ItemList"
import { useParams } from "react-router";

const ItemListContainer = () => {

    const [productList, setProductList] = useState([])
    const { id } = useParams()

    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
            if (id === undefined) {
                resolve(item)
                /* .then(res => setProductList(res))
                .catch(err => console.log(err)) */
            } else {
                resolve(item.filter(items => items.Categoria === id))
                /*  .then(res => setProductList(res))
                 .catch(err => console.log(err)) */
            }
        }, 2000);
    }, [id]);
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