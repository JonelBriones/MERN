import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'

const Home = (props) => {
    // const [user,setUser] = useState([])
    // const {user} = props;
    // const {userData} = props;
    const [loggedUser,setLoggedUser] = useState([])
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/user")
            .then((res)=> {
                console.log(res.data)
                setLoggedUser(res.data)
            })
            .catch((err)=>{console.log(err)})
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
            {/* {
                loggedUser.map((user)=> {

                    return (
                      <div key={user._id}>
                            <h1>{user.name}</h1>
                            <Navbar bg="light" expand="lg">
                                <Container>
                                    <Navbar.Brand href="/dashboard">Admin Dashboard</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Products</Nav.Link>
                                        <Nav.Link href="#link">Settings</Nav.Link>
                                        <Nav.Link href="#link">Profile</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={()=>logout(user._id)}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                    </div>  
                    )
                })
            } */}
        </div>
    )
}
export default Home;