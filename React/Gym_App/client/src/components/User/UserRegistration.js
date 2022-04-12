import React, {useState} from 'react'
import axios from 'axios';
import UserForm from './UserForm';
import { useNavigate } from 'react-router-dom';
const UserRegistration = (props) => {
    const navigate = useNavigate();
    const [confirmReg,setConfirmReg] = useState("");
    const [errors,setError] = useState({});
    const [user,setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/register",
        user,
        {
            withCredentials:true
        })
            .then((res)=>{
                console.log(res.data)
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
                setConfirmReg(
                    "Thank you for Registering, you can now log in!"
                )
                setError({})
                // navigate("/");
            })
            .catch((err)=> {
                console.log(err.response.data.errors)
                setError(err.response.data.errors)
            })
    }
    const onChangeHandler = (e) => {
        const newUserObject = {...user};
        newUserObject[e.target.name] = e.target.value;
        console.log(newUserObject);
        setUser(newUserObject);

    }


    return (
        <UserForm
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
        user={user}
        errors={errors}
        confirmReg={confirmReg}
        buttonText={'Sign Up'}
        />
    )
}
export default UserRegistration;