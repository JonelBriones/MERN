import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'

const Home = (props) => {
    const [loggedUser,setLoggedUser] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/",id)
            .then((res)=> {
                console.log(res.data)
                setLoggedUser(res.data)
            })
            .catch((err)=>{console.log(err)})
    },[])
    return (
        <div>
            <h1>Gym App</h1>
            {
                
            }
        </div>
    )
}
export default Home;