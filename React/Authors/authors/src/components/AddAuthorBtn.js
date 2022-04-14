import { Link,useNavigate } from "react-router-dom";
import { NavDropdown,Navbar,Nav } from "react-bootstrap";
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
                navigate("/users")
            })
            .catch((err)=>console.log(err))
    }
    return (
        <Navbar bg="light expand="lg>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"variant="tabs" defaultActiveKey="/home">
            {
                oneAuthor === "authorForm"?
                null:
                <Nav.Link href="/add">Add Author</Nav.Link>
            }
                {
                    oneAuthor === "displayAuthors"?
                    <Nav.Link eventKey="link-1" type="checkbox" checked=   {orderType} onClick={toggleOrderType}>
                        {
                            orderType?
                            <p>Ascended</p>:
                            <p>Descended</p>
                        }
                    </Nav.Link>:
                    <Nav.Link href="/home">Go Back</Nav.Link>
                }
            <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>logout()}>
                    Logout
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
export default AddAuthorBtn;