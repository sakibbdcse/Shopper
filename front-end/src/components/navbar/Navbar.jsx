import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="shopper-logo" />
        <p>ShopperBD</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link>Shop</Link> {menu=="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link>Mens</Link> {menu=="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link>Womens</Link> {menu=="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link>Kids</Link> {menu=="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link>Login</Link></button>
        <img src={cart} alt="shopperBD cart icon" />
        <div className="nav-cart-counter">0</div>
      </div>
    </div>
  )
}

export default Navbar