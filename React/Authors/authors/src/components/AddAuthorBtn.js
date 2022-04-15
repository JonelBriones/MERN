import { Link,useNavigate } from "react-router-dom";
import { NavDropdown,Navbar,Nav,Container } from "react-bootstrap";
import axios from "axios";
const AddAuthorBtn = (props) => {
    const navigate = useNavigate();
    const {orderType,toggleOrderType,oneAuthor,id} = props;
    const logout = () => {
        axios.post("http://localhost:8000/api/users/logout",{},
        {
            withCredentials:true
        })
            .then((res)=>{
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=>console.log(err))
    }
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">Author App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                        oneAuthor === "authorForm"?
                        null:
                        <Nav.Link href="/add">Add Author</Nav.Link>
                        }
                        {
                            oneAuthor !== "displayAuthors"?
                            <Nav.Link href="/home">Go Back</Nav.Link>:
                            <Nav.Link eventKey="link-1" type="checkbox" checked={orderType} onClick={toggleOrderType}>
                                {
                                    orderType?
                                    <span>Ascended</span>:
                                    <span>Descended</span>
                                }
                                </Nav.Link>
                        }
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={()=>logout()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}
export default AddAuthorBtn;