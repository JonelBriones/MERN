import React, {useState,useContext} from 'react'
import CartContext from '../CartContext';
import GymNavbar from './GymNavbar';

const Cart = (props) => {
    const {cart} = useContext(CartContext)
    return (
        <div>
            {/* <GymNavbar
            buttonText={'/store'}/> */}
            <h1>Cart</h1>
            {
                cart.map((product)=>(
                    <div key={product._id}>
                        {product.name}
                    </div>
                ))
            }
        </div>
    )
}
export default Cart;
