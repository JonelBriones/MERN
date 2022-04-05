import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddAuthorBtn from './AddAuthorBtn';
import DeleteBtn from './DeleteBtn';
import Home from './Home';
import UpdateAuthor from './UpdateAuthor';
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
        <div>
            <Home buttonText={"Home"}/>
            <AddAuthorBtn/>
            <h1>{oneAuthor.firstName}{oneAuthor.lastName}</h1>
            <Link to={`/edit/${oneAuthor._id}`}>
                <Button variant="warning">Edit</Button>
            </Link>
            <DeleteBtn onDeleteHandler={onDeleteHandler}
            authorObject={oneAuthor}
            successCallback={()=>removeFromDom(oneAuthor._id)}
            />
            
        </div>
    )
}
export default DisplayOneAuthor;