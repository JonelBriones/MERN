import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate,} from 'react-router-dom';
const DisplayAuthors = (props) => {
    const navigate = useNavigate();
    const [author,setAuthor] = useState([]);
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
    const addAuthor = () => {
        navigate("/add");
    }
    return (
        <div>
            <button onClick={addAuthor}>Add Author!</button>
            {
                author.map((oneAuthor)=> (
                    <div key={oneAuthor._id}>
                        <hr/>
                        <p>{oneAuthor.firstName} {oneAuthor.lastName}</p>
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
                ))
            }
        </div>
    )
}
export default DisplayAuthors;