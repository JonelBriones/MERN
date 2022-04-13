import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import {Button,Table} from 'react-bootstrap';
import AddAuthorBtn from './AddAuthorBtn';
import DeleteBtn from './DeleteBtn';
import Home from './Home';
const DisplayOneAuthor = (props) => {
    const [oneAuthor, setOneAuthor] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const {onDeleteHandler} = props;

    const removeFromDom = () => {
        console.log("Returning to Home Page")
        navigate("/")
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
         .then((res) => {
             console.log(res.data)
             setOneAuthor(res.data);
         })
         .catch((err)=> {
             console.log(err);
         })
    },[])
    return (

        <div className='table-container'>
            {
                id===null?
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{oneAuthor.firstName}{oneAuthor.lastName}</td>
                                <td><Link to={`/edit/${oneAuthor._id}`}>
                                <Button variant="warning">Edit</Button>
                                </Link>
                                <DeleteBtn onDeleteHandler={onDeleteHandler}
                                authorObject={oneAuthor}
                                successCallback={()=>removeFromDom(oneAuthor._id)}
                                /></td>
                            </tr>
                        </tbody>
                </Table>:
                <div>
                    <h1>This Author Does Not Exist!</h1>
                    <AddAuthorBtn/>
                </div>
                }
        </div>
    )
}
export default DisplayOneAuthor;