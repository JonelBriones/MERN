import AddAuthorBtn from "../components/AddAuthorBtn"
import React, {useState,useEffect} from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
const Profile = (props) => {
    const [authorList,setAuthorList] = useState([])
    const {createdBy} = useParams();
    const {username} = useParams;
    useEffect(() => {
        axios.get("http://localhost:8000/api/allAuthors/" + username,{
            withCredentials:true
        }
        )
            .then((res)=>{
                console.log(res.data)
                setAuthorList(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
    return (
        <div>
            <h1>{username}</h1>
            <AddAuthorBtn/>
        </div>
        
    )
}
export default Profile