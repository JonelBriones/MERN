import React, {useState,useContext} from 'react'
import CartContext from '../CartContext';
import GymNavbar from './GymNavbar';

const Cart = (props) => {
    const {cart} = useContext(CartContext)
    return (
        <div>
            <GymNavbar/>
            <h1>Cart</h1>
            {
                cart.map((product)=>(
                    <div key={product._id}>
                        <p>{`Product: ${product.name}`} <span>Qty: {product.qty} Price: ${product.qty * product.price}</span></p>
                    </div>
                ))
            }
        </div>
    )
}
export default Cart;
