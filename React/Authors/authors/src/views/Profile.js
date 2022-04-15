import AddAuthorBtn from "../components/AddAuthorBtn"
import React, {useState,useEffect} from 'react'
import axios from "axios"
const Profile = (props) => {

    return (
        <div>
            <h1>User</h1>
            <AddAuthorBtn/>
        </div>
        
    )
}
export default Profile