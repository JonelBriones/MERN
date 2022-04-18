import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
const GymNavbar = (props) => {
    const {buttonText,cartCount} = props;
    const [loggedUser,setLoggedUser] = useState({})
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/user",{withCredentials:true})
            .then((res)=>{
                console.log(`Logged in as ${res.data.firstName} ${res.data.lastName}`)
                setLoggedUser(res.data)
            })
            .catch((err)=>{
                console.log(err)
                // navigate('/users')
            })
    },[])
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
        <Navbar expand="lg" bg="dark" variant="dark" className="navbar">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href={buttonText}>Store</Nav.Link>
                    <Nav.Link href="/cart">Cart<span> ({cartCount})</span></Nav.Link>
                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                        {
                            !loggedUser._id?
                            <NavDropdown.Item href="/users">Sign in</NavDropdown.Item>:
                            <NavDropdown.Item href={`/profile/${loggedUser._id}`}>{loggedUser.firstName + " " + loggedUser.lastName}</NavDropdown.Item>
                        }
                    <NavDropdown.Item onClick={()=>logout()}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}   
export default GymNavbar;