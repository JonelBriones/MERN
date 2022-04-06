import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useNavigate,} from 'react-router-dom';
import AddAuthorBtn from './AddAuthorBtn';
import Button from 'react-bootstrap/Button'
import DeleteBtn from './DeleteBtn';
const DisplayAuthors = (props) => {
    const navigate = useNavigate();
    const [author,setAuthor] = useState([]);
    const [orderType,setOrderType] = useState(false);
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
        <div>
            <AddAuthorBtn/>
            <div>
            <button type="checkbox" checked={orderType} onClick={toggleOrderType}>
                {
                    orderType?
                    <p>Ascended</p>:
                    <p>Descended</p>
                }
            </button>
            </div>
            {
                sortedInAlphabeticalOrder.map((oneAuthor)=> (
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