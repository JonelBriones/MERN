import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GymNavbar from './GymNavbar';
import {Table} from 'react-bootstrap'
const Profile = (props) => {
    const [loggedUser,setLoggedUser] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/user",{withCredentials:true})
            .then((res)=>setLoggedUser(res.data))
            .catch((err)=>console.log(err))
    })
    return (
        <>
            <GymNavbar
            buttonText={"Profile"}/>
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{loggedUser.firstName}</td>
                        <td>{loggedUser.lastName}</td>
                        <td>{loggedUser.email}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
export default Profile;