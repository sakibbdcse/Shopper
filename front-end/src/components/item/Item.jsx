import React from 'react'
import './item.css'
const Item = (item) => {
    return (
        <div className='item'>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {item.price_new}
                </div>
                <div className="item-price-old">
                    {item.price_old}
                </div>
            </div>
        </div>
    )
}

export default Item