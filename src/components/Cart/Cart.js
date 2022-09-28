import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {img, category, age, timeRequired} = props.cart;
    return (
        <div className='cart'>
          <img src={img} alt="" />
            <div className='product-info'>
                <p className='course-name'>{category}</p>
                <p></p>
                <p>{age}</p>
                <p>{timeRequired}</p>
            </div>
            <button className='btn-cart'></button>
        </div>
    );
};

export default Cart;