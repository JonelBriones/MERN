import React, {useState} from 'react'
import axios from 'axios';
import UserForm from '../components/User/UserForm';
import { useNavigate } from 'react-router-dom';
import UserLogin from '../components/User/UserLogin';
const UserLogReg = (props) => {
    const navigate = useNavigate();
    const [confirmReg,setConfirmReg] = useState("");
    const [errors,setError] = useState({});
    const [user,setUser] = useState({
        username:"",
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

    /* USER LOGIN */
    const [errorsLogin,setErrorLogin] = useState("");
    const [userLogin,setUserLogin] = useState({
        username: "",
        password: "",
    });
    const onSubmitHandlerLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login",
        userLogin,{withCredentials:true})
            .then((res)=>{
                console.log(res.data)
                navigate("/home");
                // setUserData(res.data)
            })
            .catch((err)=> {
                console.log(err.response.data.message)
                setErrorLogin(err.response.data.message)
                setUserLogin({
                    username: "",
                    password: ""
                })
            })

    }
    

    const onChangeHandlerLogin = (e) => {
        const newUserObject = {...userLogin};
        newUserObject[e.target.name] = e.target.value;
        console.log(newUserObject);
        setUserLogin(newUserObject);
    }


    return (
        <div>
            <h1>Author App</h1>
            {
                confirmReg?
            <h1>{confirmReg}</h1>:
            <h1>Registration</h1>
            
            }
        <div className="container">
            <div className="adminReg">
                <UserForm
                onSubmitHandler={onSubmitHandler}
                onChangeHandler={onChangeHandler}
                user={user}
                errors={errors}
                confirmReg={confirmReg}
                buttonText={'Sign Up'}
                />
            </div>
            <div className="adminLogin">
                <UserLogin
                onSubmitHandler={onSubmitHandlerLogin}
                onChangeHandler={onChangeHandlerLogin}
                user={userLogin}
                errors={errorsLogin}
                buttonText={'Login'}
                />
            </div>
        </div>
        </div>
    )
}
export default UserLogReg;