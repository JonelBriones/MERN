import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorForm from './AuthorForm';
import AddAuthorBtn from './AddAuthorBtn';
const NewAuthor = (props) => {

    const navigate = useNavigate();
    const [errors, setError] = useState({});
    const [newAuthor, setNewAuthor] = useState({
        firstName: "",
        lastName: "",
    })

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author",newAuthor)
            .then((res)=> {
                console.log(res) 
                console.log(res.data)
                navigate("/");
            })
            .catch((err) => {
                console.log("Response Error:",err.response)
                console.log("Response Message:",err.response.data)
                console.log("Response Object Validation:",err.response.data.errors)
                setError(err.response.data.errors)
            })
    }

    const onChangeHandler = (e) => {
        const newAuthorObject = {...newAuthor};
        newAuthorObject[e.target.name] = e.target.value;
        console.log(`e.target.name = ${e.target.name}`)
        console.log(`e.target.value = ${e.target.value}`)
        console.log(newAuthorObject)
        setNewAuthor(newAuthorObject);
    }
    const home = () => {
        navigate("/");
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