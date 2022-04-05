import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useNavigate,} from 'react-router-dom';
import AddAuthorBtn from './AddAuthorBtn';
import Button from 'react-bootstrap/Button'
import DeleteBtn from './DeleteBtn';
const DisplayAuthors = (props) => {
    const navigate = useNavigate();
    const [author,setAuthor] = useState([]);
    const {onDeleteHandler} = props;

    const removeFromDom = authorId => {
        console.log("Returning to Home Page")
        navigate("/")
        setAuthor(author.filter(oneAuthor => oneAuthor._id !== authorId));
    }
    
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
    return (
        <div>
            <AddAuthorBtn/>
            {
                author.map((oneAuthor)=> (
                    <div key={oneAuthor._id}>
                        <hr/>
                        <div>
                            <Link to={`/show/${oneAuthor._id}`}><Button variant="info">{oneAuthor.firstName} {oneAuthor.lastName}</Button>
                            </Link>
                        </div>
                        <Link to={`/edit/${oneAuthor._id}`}>
                            <Button variant="warning">Edit</Button>
                        </Link>
                        <DeleteBtn 
                        onDeleteHandler={onDeleteHandler} 
                        authorObject={oneAuthor}
                        successCallback={()=>removeFromDom(oneAuthor._id)}
                        />
                    </div>
                ))
            }
        </div>
    )
}
export default DisplayAuthors;