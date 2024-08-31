import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const Item = (item) => {
    return (
        <div className='item'>
            <Link to={`/product/${item.id}`}><img src={item.image} alt="" /></Link>
            <p>{item.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${item.new_price}
                </div>
                <div className="item-price-old">
                    ${item.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item