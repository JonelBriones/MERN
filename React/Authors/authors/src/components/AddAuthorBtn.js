import { Link } from "react-router-dom";
import {Nav} from 'react-bootstrap'
const AddAuthorBtn = (props) => {
    const {orderType,toggleOrderType,oneAuthor,id} = props;
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            {
                oneAuthor === "authorForm"?
                null:
                <Nav.Item>
                    <Nav.Link href="/add">Add Author</Nav.Link>
                </Nav.Item>
            }
            <Nav.Item>
                {
                    oneAuthor === "displayAuthors"?
                    <Nav.Link eventKey="link-1" type="checkbox" checked=   {orderType} onClick={toggleOrderType}>
                        {
                            orderType?
                            <p>Ascended</p>:
                            <p>Descended</p>
                        }
                    </Nav.Link>:
                    <Nav.Link href="/">Go Back</Nav.Link>
                }
            </Nav.Item>
        </Nav>
    )
}
export default AddAuthorBtn;