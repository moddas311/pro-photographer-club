import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, setCount } = props
    const { img, category, age, timeRequired } = cart;
    return (
        <div className='carts'>
            <div className='cart'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h4 className='course-name'>{category}</h4>
                    <p>For Age: {age}</p>
                    <p>Time required: {timeRequired}s</p>
                </div>
                <button onClick={() => setCount(timeRequired)} className='btn-cart'>Add to cart</button>
            </div>
        </div>
    );
};

export default Cart;