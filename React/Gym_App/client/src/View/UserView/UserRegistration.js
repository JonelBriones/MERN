import React, {useState} from 'react'
import axios from 'axios';
import UserForm from '../../components/User/UserForm';
import { useNavigate } from 'react-router-dom';
import UserLogin from '../../components/User/UserLogin';
import GymNavbar from '../../components/Gym/GymNavbar';
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

    /* USER LOGIN */
    const [userData,setUserData] = useState("")
    const [errorsLogin,setErrorLogin] = useState("");
    const [userLogin,setUserLogin] = useState({
        email: "",
        password: "",
    });
    const onSubmitHandlerLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login",
        userLogin,
        {
            withCredentials:true
        })
            .then((res)=>{
                console.log(res.data)
                navigate("/");
                // setUserData(res.data)
            })
            .catch((err)=> {
                console.log(err.response.data.message)
                setErrorLogin(err.response.data.message)
                setUserLogin({
                    email: "",
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
            <GymNavbar
            buttonText={"Home"}
            />
            <div className="logReg-container">
                <div className="adminReg">
                <h1>Gym App</h1>
                {
                    confirmReg?
                <h1>{confirmReg}</h1>:
                <h1>Registration</h1>
                
                }
                    <UserForm
                    onSubmitHandler={onSubmitHandler}
                    onChangeHandler={onChangeHandler}
                    user={user}
                    errors={errors}
                    confirmReg={confirmReg}
                    buttonText={'Sign Up'}
                    />
                </div>
                <hr/>
                <div className="adminLogin">
                <h1>Login</h1>

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
export default UserRegistration;