import React, {useEffect,useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AddAuthorBtn from '../components/AddAuthorBtn';
import io from 'socket.io-client';

const UpdateAuthor = (props) => {
    const [errors, setError] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const [socket] = useState(() => io(':8000'));

    const [updateAuthor, setUpdateAuthor] = useState({
        firstName: "",
        lastName: "",
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
            setUpdateAuthor(res.data);
            // socket.emit("update_author",res.data);
            // // disconnect before leaving
            // socket.disconnect();
            //     res.data !== null?
            //     console.log(res.data):
            //     console.log("This Author does not exist!")
         })
         .catch((err)=> {
             console.log(err);

         })
    },[id])

    // USER LOGGED IN  
    const [loggedUser,setLoggedUser] = useState([])

    useEffect(() => {
        console.log("Checking User Logged In")
        axios.get("http://localhost:8000/api/user/secure")
            .then((res)=> {
                console.log(res.data)
                setLoggedUser(res.data)
            })
            .catch((err)=>{console.log(err)})
    },[])

    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/author/" + id,updateAuthor,{ withCredentials: true })
            .then((res)=> {
                console.log(res) 
                console.log(res.data)
                socket.emit("update_author",res.data);
            // disconnect before leaving
            socket.disconnect();
                res.data !== null?
                console.log(res.data):
                console.log("This Author does not exist!")
                navigate("/home");
            })
            .catch((err) => {
                console.log("Response Error:",err.response)
                console.log("Response Message:",err.response.data)
                console.log("Response Object Validation:",err.response.data.errors)
                setError(err.response.data.errors)
                if(err.response.status === 401) {
                    navigate("/")
                }
            })
    }

    const onChangeHandler = (e) => {
        const updateAuthorObject = {...updateAuthor};
        updateAuthorObject[e.target.name] = e.target.value;
        console.log(`e.target.name = ${e.target.name}`)
        console.log(`e.target.value = ${e.target.value}`)
        setUpdateAuthor(updateAuthorObject);
        console.log(updateAuthorObject)
        console.log(updateAuthorObject)
    }
    return (
        <div className='table-container'>
            {
                updateAuthor !== null?
                <div>
                    <h1>Update Author</h1>
                    <AddAuthorBtn/>
                    <AuthorForm 
                        errors={errors}
                        newAuthor={updateAuthor}
                        onSubmitHandler={updateSubmitHandler}
                        onChangeHandler={onChangeHandler}
                        buttonText={"Update Author"} 
                    /> 
                </div>:
                <div>
                    <h1>This Author Does Not Exist!</h1>
                    <AddAuthorBtn/>
                </div>
            }
            
        </div>
    )
}
export default UpdateAuthor;