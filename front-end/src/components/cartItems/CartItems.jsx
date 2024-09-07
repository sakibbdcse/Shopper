import React, { useContext } from 'react';
import './cartItems.css';
import remove_icon from '../../assets/cart_cross_icon.png';
import { ShopContext } from '../../context/ShopContext';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);

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

                    const price = item.new_price?.toFixed(2) || "0.00";
                    const totalPrice = (item.new_price * quantity)?.toFixed(2) || "0.00";

                    return (
                        <div key={item.id}>
                            <div className='cart-item-format cart-item-format-main'>
                                <img className='cart-icon-product-icon' src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>${price}</p>
                                <div className='cart-item-quantity'>
                                    <button onClick={() => addToCart(item.id)}>+</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => removeFromCart(item.id)}>-</button>
                                </div>
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
            <div className="cart-item-down">
                <div className="cart-item-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-item-total-item">
                            <p>Sub total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-item-promocode">
                    <p>If you have a promocode Enter here</p>
                    <div className="cart-item-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
