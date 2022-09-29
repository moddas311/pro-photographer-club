import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Nav from '../Nav/Nav';
import User from '../User/User';
import './Home.css'

const Home = () => {
    const[carts, setCarts] = useState([])
    useEffect( ()=>{
        fetch('photography.json')
        .then(response =>response.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div className='home-container'>
           <div className="cart-container">
                <Nav/>
                <div className='package'>
                    {
                        carts.map(cart => <Cart
                        key = {cart.id}
                        cart = {cart}
                        ></Cart>)
                    }
                </div>
           </div>
           <div className="cart-calculation">
                <User></User>
           </div>
        </div>
    );
};

export default Home;