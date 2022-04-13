import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'

const AdminNavbar = (props) => {

    const {loggedAdmin,logout} = props;
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
export default AdminNavbar;