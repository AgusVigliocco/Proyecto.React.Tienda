import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail"
import products from "../data/MOCK_DATA.json"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        getData.then((res) =>
            setData(res.find((products) => products.Modelo === id)),
        );
    }, [id]);

    return (
        <>
            <ItemDetail data={data} />
        </>
    )
}

export default ItemDetailContainer;
