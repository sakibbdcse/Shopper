import React from 'react'
import './breadcrums.css'
import breadcrum_arrow from '../../assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const { product } = props
    return (
        <div className='breadcrums'>
            Home <img src={breadcrum_arrow} alt="breadcrum arrow icon" /> Shop <img src={breadcrum_arrow} alt="breadcrum arrow icon" /> {product.category} <img src={breadcrum_arrow} alt="breadcrum arrow icon" /> Shop <img src={breadcrum_arrow} alt="breadcrum arrow icon" /> {product.name}
        </div>
    )
}

export default Breadcrums