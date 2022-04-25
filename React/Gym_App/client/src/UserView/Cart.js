import React, {useState,useContext} from 'react'
import CartContext from '../CartContext';
import GymNavbar from './GymNavbar';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'
const Cart = (props) => {
    const {cart,addToCart,removeFromCart,cartQty} = useContext(CartContext)

    const navigate = useNavigate();
    const redirect = (page) => {
        navigate(page)
    }
    return (
        <div>
            <GymNavbar/>
            <div className='container'>
            <h1>Shopping Cart</h1>
            <hr/>
                {
                    cartQty===0?
                    <>
                <p>There are no items in your cart.</p>
                    <hr/>
                    <button className='btn-no-item' onClick={()=>redirect(`/store`)}>Continue Shopping</button>
                    </>
                :null
                }
            <div className='product-flex-container'>
                {
                cart.map((product)=>(
                    <div key={product._id} className='btn'>
                        <>
                        <button className="product" onClick={()=>redirect(`/store/${product.name}`)}>
                            <div className='product-content' style={{backgroundImage: `url(${product.image})`,
                            height: '300px',
                            width: '100%',
                            backgroundPosition: 'left -90px top -80px'
                            }}>
                            </div>
                        </button>
                        <div>{product.name}</div><div>Qty: {product.qty} Price: ${product.qty * product.price}</div>
                        <div className='btn-add-del'>
                                <Button className='btn-add' variant="info" size="sm"  onClick={()=>addToCart(product)}>Add 
                                ({
                                    cart.map((oneProduct)=>(
                                        product._id === oneProduct._id?
                                        product.qty:null
                                        ))
                                    })
                                
                                </Button >
                                {
                                cart.map((oneProduct)=>(
                                    product._id === oneProduct._id?
                                    product.qty?
                                    <Button key={product._id} className='btn-del' variant="danger" size="sm" onClick={()=>removeFromCart(product)}>Remove</Button>:null:null
                                    ))
                                } 
                            </div>
                        </>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    )
}
export default Cart;
