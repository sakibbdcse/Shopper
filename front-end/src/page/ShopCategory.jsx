import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from './../context/ShopContext';
import dropDawon_icon from '../assets/dropdown_icon.png'
import Item from '../components/item/Item';
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-benner' src={props.benner} alt="discount ads benner" />
      <div className="shop-category-index-short">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shop-category-short">
          Short by <img src={dropDawon_icon} alt="drop down icon" />
        </div>
      </div>
      <div className="shop-category-product">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory