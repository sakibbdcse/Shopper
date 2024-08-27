import React from 'react'
import './item.css'
const Item = (item) => {
    return (
        <div className='item'>
            <img src={item.image} alt="" />
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