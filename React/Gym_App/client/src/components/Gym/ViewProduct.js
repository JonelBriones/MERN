import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

const ViewProduct = (props) => {
    const [product,setProduct] = useState([])
    const {id} = useParams();
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/product/" + id)
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>{console.log(err)})
    },[])
    return (
        <div>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Description:</th>
                        <th>Category:</th>
                        <th>Price:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    )
}

export default ViewProduct;