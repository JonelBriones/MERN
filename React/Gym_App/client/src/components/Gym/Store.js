import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'

const Store = (props) => {
    const navigate = useNavigate();
    const [product,setProduct] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>console.log(err))

    },[])

    const addToCart = (product) => {
        setCart(product)
        console.log(cart)
    }

    const logout = () => {
        axios.post("http://localhost:8000/api/users/logout",{},
        {
            withCredentials:true
        })
            .then((res)=>{
                console.log(res.data)
                navigate("/users")
            })
            .catch((err)=>console.log(err))
    }

    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Gym Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/products">Store</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>logout()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Descripton</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
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
                        <td><Button variant="info" size="sm" onClick={()=>addToCart(oneProduct)}>Add to cart</Button></td>
                    </tr>
                ))
            }
                </tbody>
            </Table>
        </div>
    )
}
export default Store;