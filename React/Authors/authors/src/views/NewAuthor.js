import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import AddAuthorBtn from '../components/AddAuthorBtn';
import io from 'socket.io-client';

const NewAuthor = (props) => {

    const navigate = useNavigate();
    const [socket] = useState(() => io(':8000'));
    const [errors, setError] = useState({});
    const [newAuthor, setNewAuthor] = useState({
        firstName: "",
        lastName: "",
    })

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author",newAuthor,
        { withCredentials: true } // sends cookie with axios request and checks authentication
        )
            .then((res)=> {
                console.log(res) 
                console.log(res.data)
                // notify the server a new author is added, notify client of new author
                socket.emit("add_author",res.data);
                // disconnect before leaving
                socket.disconnect();
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
        const newAuthorObject = {...newAuthor};
        newAuthorObject[e.target.name] = e.target.value;
        setNewAuthor(newAuthorObject);
    }
    return (
        <div className='table-container'>
            
            <h1>Add Your Favorite Author!</h1>
            <AddAuthorBtn
            oneAuthor={"authorForm"}/>
            <AuthorForm 
            errors={errors}
            newAuthor={newAuthor}
            onSubmitHandler={newSubmitHandler}
            onChangeHandler={onChangeHandler}
            buttonText={"Add Author"} 
            />
        </div>
    )
}

export default NewAuthor;