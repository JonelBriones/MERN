import React, {useState,useEffect} from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Dashboard = (props) => {
    const navigate = useNavigate();

    const [loggedAdmin,setloggedAdmin] = useState({})
    const [admin,setAdmin] = useState({})
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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/dashboard">Admin Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Products</Nav.Link>
                        <Nav.Link href="#link">Settings</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
export default Dashboard;