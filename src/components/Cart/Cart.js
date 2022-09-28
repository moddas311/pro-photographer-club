import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {img, category, age, timeRequired} = props.cart;
    return (
        <div className='cart'>
          <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='course-name'>{category}</h4>
                <p>For Age: {age}</p>
                <p>Time required: {timeRequired}</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Cart;