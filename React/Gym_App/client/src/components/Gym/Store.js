import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
const Store = (props) => {

    const [product,setProduct] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>console.log(err))

    },[])
    return (
        <div>
            <h1>All Products</h1>

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Descripton</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                product.map((oneProduct,index)=> (
                    <tr key={oneProduct._id}>
                        <td><Link to={`product/${oneProduct.name}`}>{oneProduct.name}</Link></td>
                        <td>{oneProduct.description}</td>
                        <td>{oneProduct.category}</td>
                        <td>{oneProduct.price}</td>
                    </tr>
                ))
            }
                </tbody>
            </Table>
        </div>
    )
}
export default Store;