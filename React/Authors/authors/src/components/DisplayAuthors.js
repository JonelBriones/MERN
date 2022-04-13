import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useNavigate,} from 'react-router-dom';
import AddAuthorBtn from './AddAuthorBtn';
import DeleteBtn from './DeleteBtn';
import {Table,Button} from 'react-bootstrap'
import io from 'socket.io-client';

const DisplayAuthors = (props) => {
    const navigate = useNavigate();
    const [author,setAuthor] = useState([]);
    const [orderType,setOrderType] = useState(false);
    const [socket] = useState(() => io(':8000'));
    const [message,setMessage] = useState("connecting to server");
    const {onDeleteHandler} = props;

    const removeFromDom = authorId => {
        console.log("Returning to Home Page")
        navigate("/")
        setAuthor(author.filter(oneAuthor => oneAuthor._id !== authorId));
    }
    useEffect(()=> {
        socket.on("socket connected", (data) => { 
            console.log(socket.id)
            console.log(data);
            setMessage("New message added");
            setAuthor([data,...author])
            });

            return () => socket.disconnect(true);
          }, [author]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res)=> {
                console.log("Listing all Authors from mongoDB",res.data);
                /* takes the list of object results and sets each object as author */
                setAuthor(res.data); 

            })
            .catch((err)=> {
                console.log(err);
            })
    },[]);
    // const {authorListOrder, setAuthorListOrder} = useState([])
    const sortedInAlphabeticalOrder = author.sort((a,b)=> {
        const ascended = (setAuthor === 'asc')?-1: 1;
        const descended = (setAuthor === 'des')?1: -1;
        
        return (orderType?
        ascended * a.firstName.localeCompare(b.firstName):
        descended * a.firstName.localeCompare(b.firstName))
    })
    const toggleOrderType = () => {
        setOrderType(!orderType)
        console.log(orderType)
    }
    return (
            <div className='table-container'>
                <h1>All Authors</h1>
                <AddAuthorBtn
                orderType={orderType}
                toggleOrderType={toggleOrderType}
                oneAuthor={"displayAuthors"}
                />
                <p>{message}</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            sortedInAlphabeticalOrder.map((oneAuthor)=> (
                                <tr key={oneAuthor._id}>
                                    <td>
                                        <Link to={`/show/${oneAuthor._id}`}><Button variant="info">{oneAuthor.firstName} {oneAuthor.lastName}</Button>
                                        </Link>
                                    </td>
                                    <td>
                                    <Link to={`/edit/${oneAuthor._id}`}>
                                        <Button variant="warning">Edit</Button>
                                    </Link>
                                    <DeleteBtn 
                                    onDeleteHandler={onDeleteHandler} 
                                    authorObject={oneAuthor}
                                    successCallback={()=>removeFromDom(oneAuthor._id)}
                                    />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
    )
}
export default DisplayAuthors;