import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const { getTotallCardItem } = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="shopper-logo" />
        <p>ShopperBD</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link to="/mens">Mens</Link> {menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}><Link to="/womens">Womens</Link> {menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to='/login'>Login</Link></button>
        <Link to={'/cart'}><img src={cart} alt="shopperBD cart icon" /></Link>
        <div className="nav-cart-counter">{getTotallCardItem()}</div>
      </div>
    </div>
  )
}

export default Navbar