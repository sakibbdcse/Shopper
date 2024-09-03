import React from 'react'
import './productDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_doll_icon from '../../assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const { product } = props
    return (
        <div className='product-display'>
            <div className="product-display-right">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className='product-display-main-image' src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-left">
                <h1>{product.name}</h1>
                <div className="product-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_doll_icon} alt="" />
                    <p>(122)</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay