import React, { useContext } from 'react';
import './cartItems.css';
import remove_icon from '../../assets/cart_cross_icon.png';
import { ShopContext } from '../../context/ShopContext';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    const cartProducts = all_product.filter(item => cartItems[item.id] > 0);

    return (
        <div className='cart-Items'>
            <div className="cart-item-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {cartProducts.length > 0 ? (
                cartProducts.map((item) => {
                    const quantity = cartItems[item.id];

                    // Handle undefined prices by providing a default value
                    const price = item.price ? item.price.toFixed(2) : "0.00";
                    const totalPrice = item.new_price ? (item.new_price * quantity).toFixed(2) : "0.00";

                    return (
                        <div key={item.id}>
                            <div className='cart-item-format'>
                                <img className='cart-icon-product-icon' src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>${price}</p>
                                <span className='cart-item-quantity'>{quantity}</span>
                                <p>${totalPrice}</p>
                                <img
                                    src={remove_icon}
                                    onClick={() => removeFromCart(item.id)}
                                    alt="Remove item"
                                    className="remove-icon"
                                />
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="cart-empty">Your cart is empty</div>
            )}
        </div>
    );
};

export default CartItems;
