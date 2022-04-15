import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useNavigate,} from 'react-router-dom';
import AddAuthorBtn from '../components/AddAuthorBtn';
import DeleteBtn from '../components/DeleteBtn';
import {Table,Button} from 'react-bootstrap'
import io from 'socket.io-client';

const DisplayAuthors = (props) => {
    const navigate = useNavigate();
    const [author,setAuthor] = useState([]);
    const [orderType,setOrderType] = useState(false);
    const {onDeleteHandler} = props;
    
    // USER LOGGED IN  
    const [loggedUser,setLoggedUser] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/user")
            .then((res)=> {
                console.log("User Logged In:",res.data)
                setLoggedUser(res.data)
            })
            .catch((err)=>{console.log(err)})
    },[])

    // SOCKET
    const [socket] = useState(() => io(':8000'));
    const [message,setMessage] = useState("connecting to server");

    useEffect(()=> {
        console.log("Inside useEffect for sockets")
            socket.on("connect", ()=> {
                console.log(socket)
                console.log(socket.id);
            })
            //list for new authors event
            socket.on("author_added",(authorId)=> {
                console.log("new author added")
                console.log(authorId)
                //author is not refresh after listen is setup
                setAuthor((currentValue)=>[authorId,...currentValue]);
            });
            socket.on("author_updated",(authorId)=> {
                console.log("new author added")
                console.log(authorId)
                //author is not refresh after listen is setup
                // setAuthor((currentValue)=>[authorId,...currentValue]);
            });
            socket.on("author_deleted",(authorId)=> {
                console.log("author deleted")
                setAuthor((currentValue)=> {
                    return currentValue.filter((oneAuthor)=>{
                        return oneAuthor._id !== authorId;
                    })
                })
            })
            return () => socket.disconnect();
          }, []);

    const removeFromDom = authorId => {
        console.log("Returning to Home Page")
        navigate("/home")
        setAuthor(author.filter(oneAuthor => oneAuthor._id !== authorId));
    }

    // Retrieve all Authors
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
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
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Created By</th>
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
                                    <td>{oneAuthor.createdBy.username}</td>
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