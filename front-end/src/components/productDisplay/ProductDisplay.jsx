import React from 'react'
import './productDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_doll_icon from '../../assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    return (
        <div className='product-display'>
            <div className="product-display-left">
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
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_doll_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-old-Price">${product.old_price}</div>
                    <div className="product-display-right-new-Price">${product.new_price}</div>
                </div>
                <div className="product-display-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus voluptas possimus, maxime reiciendis quae!
                </div>
                <div className="product-right-size">
                    <h1>select size</h1>
                    <div className="product-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>Add To Cart</button>
                <p className='product-display-right-category'><span>Category: </span>Women, T-shirt, Crop Top</p>
                <p className='product-display-right-category'><span>Tags: </span>Mordern, Letest, New</p>
            </div>
        </div>
    )
}

export default ProductDisplay