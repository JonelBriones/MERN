import React, {useState,useEffect} from 'react';
import GymNavbar from '../../components/Gym/GymNavbar';

import {Button} from 'react-bootstrap'
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'
const Home = (props) => {
    const [loggedUser,setLoggedUser] = useState({})
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/user",{withCredentials:true})
            .then((res)=>{
                console.log(`Logged in as ${res.data.firstName} ${res.data.lastName}`)
                setLoggedUser(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return (
        <>
            <GymNavbar buttonText={"/store"}/>
            <div className="container">
                <header>
                    <h1>Insert Gym Name</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu odio. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Mattis nunc sed blandit libero volutpat sed. Ac turpis egestas sed tempus urna et pharetra. Lorem dolor sed viverra ipsum nunc.</p>
                    {
                        !loggedUser.firstName?
                        <Button href="/users">Sign up</Button>:
                        null
                        
                    }
                </header>
            </div>
        </>
    )
}
export default Home;