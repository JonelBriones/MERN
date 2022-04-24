import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import GymNavbar from '../../components/Gym/GymNavbar';

const Store = (props) => {
    const navigate = useNavigate();
    const [product,setProduct] = useState([])
    const [cart,setCart] = useState([])
    const [cartCount,setCartCount] = useState(0)
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>console.log(err))

    },[setCart])
    const checkQty = ()=> {
        cart.map((oneProduct)=>{
            console.log(oneProduct.qty)
        })
    }
    const addToCart = (productObject) => {

        // is our product already in the cart?
        const exist = cart.find((product)=>product._id === productObject._id)
        // if true, add 1 to quantity key value pair for every time it exist/added
        if(exist) {
            setCart(cart.map((product)=>
            //find the matching added product from the cart and increment the qty
                product._id === productObject._id? {...exist,qty: exist.qty + 1}:product


                /* 
                go into the product object and increment qty
                    product : {
                        name : name,
                        etc : etc,
                        qty: qty + 1 (added 1)
                    }
                */
            ))
            console.log(cart)
        }
        // else, add to cart and iniate item quantity key value pair
        else {
            setCart([...cart,{...productObject,qty: 1}])
            /* 
                go into the product object
                    product : {
                        name : name,
                        etc : etc,
                        qty: 1 (newly created)
                    }
                */
            console.log(cart)
        }
    }
    const removeFromCart = (productObject) => {
        const exist = cart.find((product)=>product._id === productObject._id)
        // if qty equals 0 stop decrementing
        if(exist.qty === 1) {
            setCart(cart.filter((product)=>
            //find the matching added product from the cart and increment the qty
                product._id !== productObject._id
                /* 
                go into the product object
                    product : {
                        name : name,
                        etc : etc,
                        qty: qty + 1 (added 1)
                    }
                */
            ))
        console.log(cart)
        } else {
            // map into cart and find matching object
            setCart(cart.map((product)=>
                product._id === productObject._id? 
                {...product,qty: product.qty-1}:product
                ))
            console.log(cart)
        }
    }
    return (
        <>
            <GymNavbar buttonText={"/store"}
            cartCount={cart.length}/>
            <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Descripton</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                product.map((oneProduct,index)=> (
                    <tr key={oneProduct._id}>
                        <td><Link to={`${oneProduct.name}`}>{oneProduct.name}</Link></td>
                        <td>{oneProduct.description}</td>
                        <td>{oneProduct.category}</td>
                        <td>{oneProduct.price}</td>
                        <td><Button variant="info" size="sm" onClick={()=>addToCart(oneProduct)}>Add 
                        ({
                            cart.map((product)=>(
                                product._id === oneProduct._id?
                                product.qty:null
                            ))
                        })
                         to cart</Button>
                         {
                             cart.map((product)=>(
                                product._id === oneProduct._id?
                                product.qty?
                                <Button key={oneProduct._id} variant="info" size="sm" onClick={()=>removeFromCart(oneProduct)}>Remove from cart</Button>:null:null
                            ))
                         } 
                        </td>
                    </tr>
                ))
            }
                </tbody>
            </Table>
            </div>
        </>
    )
}
export default Store;