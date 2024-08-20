import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="shopper-logo" />
        <p>ShopperBD</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}>Shop {menu=="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}>Mens {menu=="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}>Womens {menu=="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids {menu=="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="shopperBD cart icon" />
        <div className="nav-cart-counter">0</div>
      </div>
    </div>
  )
}

export default Navbar