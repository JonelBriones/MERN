import React, {useState,useEffect} from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Dashboard = (props) => {
    const navigate = useNavigate();
    
    const [loggedAdmin,setloggedAdmin] = useState([])
    const [admin,setAdmin] = useState(false)
    useEffect(()=> {
        axios.get("http://localhost:8000/api/admins")
            .then((res)=>{
                setloggedAdmin(res.data)
                console.log(res.data)
            })
            .catch((err)=>console.log(err))

    },[])

    const logout = () => {
        axios.post("http://localhost:8000/api/admin/logout",{},
        {
            withCredentials:true
        })
            .then((res)=>{
                console.log(res.data)
                navigate("/admin")
            })
            .catch((err)=>console.log(err))
    }

    return (
        <div>
            {
                loggedAdmin.map((admin)=> {

                    return (
                      <div key={admin._id}>
                            <h1>{admin.name}</h1>
                            <Navbar expand="lg" bg="dark" variant="dark">
                                <Container>
                                    <Navbar.Brand href="/dashboard">Admin Dashboard</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/products">Store</Nav.Link>
                                        <Nav.Link href="/products/add">Add Product</Nav.Link>
                                        <Nav.Link href="#link">Settings</Nav.Link>
                                        <Nav.Link href="#link">Profile</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        {
                                            loggedAdmin.map((admin)=> {

                                                return (
                                                <div key={admin._id}>
                                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                                </div>  
                                                )
                                            })
                                        }
                                        </NavDropdown>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                    </div>  
                    )
                })
            }
        </div>
    )
}
export default Dashboard;