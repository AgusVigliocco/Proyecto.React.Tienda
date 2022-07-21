import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail"


const product = {
    imagen: "../Assets/Images/Iphone1_list.jpg",
    id: 1,
    modelo: "Modelo 1",
    color: "Rojo",
    stock: "10",
    precio: "$1200",

}
const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, []);

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;
