import React, {useEffect,useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import AddAuthorBtn from './AddAuthorBtn';
const UpdateAuthor = (props) => {
    const [errors, setError] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const [updateAuthor, setUpdateAuthor] = useState({
        firstName: "",
        lastName: "",
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
            setUpdateAuthor(res.data);
            res.data !== null?
            console.log(res.data):
            console.log("This Author does not exist!")
         })
         .catch((err)=> {
             console.log(err);

         })
    },[id])

    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/author/" + id,updateAuthor)
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