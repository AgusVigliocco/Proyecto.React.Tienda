import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map(item => <Item key={item.Modelo} product={item} />)
            }
        </>
    )
}

export default ItemList