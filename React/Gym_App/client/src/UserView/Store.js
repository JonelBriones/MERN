import React, {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'
import { useNavigate,Link } from 'react-router-dom'
import CartContext from '../CartContext';
import GymNavbar from './GymNavbar';
import ProductsData from '../ProductsData';
const Store = (props) => {
    const {products} = props;
    const [product,setProduct] = useState([])
    const navigate = useNavigate();
    const {cart,addToCart,removeFromCart} = useContext(CartContext)
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>console.log(err))

    },[])
    const redirect = (page) => {
        navigate(page)
    }
    return (
        <>
            <GymNavbar/>
            <div className="container">
            <main className='product-flex-container'>
                    {
                product.map((oneProduct)=> (
                        <div key={oneProduct._id}>
                            {/* <img src={oneProduct.image}></img> */}
                            <button className="product" onClick={()=>redirect(`${oneProduct.name}`)} style={{
                                border: 'none'
                            }}>
                                <div className='product-content' style={{backgroundImage: `url(${oneProduct.image})`,
                                height: '300px',
                                width: '100%',
                                backgroundPosition: 'left -90px top -80px'
                                }}>
                                <div>{oneProduct.name}</div>
                                <div>{oneProduct.price}</div>
                                </div>
                            </button>
                        </div>
                ))
            }
            </main>
            </div>
            {/* <ProductsData/>       */}
        </>
    )
}
export default Store;