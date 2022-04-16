import AddAuthorBtn from "../components/AddAuthorBtn"
import React, {useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from "react-router-dom"
import {Table,Button} from 'react-bootstrap'
import DeleteBtn from '../components/DeleteBtn';

const Profile = (props) => {
    // GET ALL AUTHORS FROM USERNAME
    // when mapped, use the createdBy.username as a param
    const {username} = useParams();

    // set all authors created by the profile name
    const [authorsCreated,setAuthorsCreated] = useState([])
    const {onDeleteHandler} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allAuthors/${username}`,{withCredentials:true})
            .then((res)=> {
                console.log("All Authors added by " + username,res.data)
                setAuthorsCreated(res.data)
            })
            .catch((err)=>{console.log(err)})
    },[])
    const removeFromDom = authorId => {
        // console.log("Returning to Home Page")
        // navigate("/home")
        setAuthorsCreated(authorsCreated.filter(oneAuthor => oneAuthor._id !== authorId));
    }
    return (
        <div className='table-container'>
            <h1>{username}'s Profile</h1>
            <AddAuthorBtn/>
            <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>Author's added by {username}</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                    authorsCreated.map((author)=>(
                        <tr key={author._id}>
                            <td>
                                <Link to={`/show/${author._id}`}><Button>{author.firstName + " " + author.lastName}</Button></Link>
                            </td>
                            <td>
                                <Link to={`/edit/${author._id}`}>
                                <Button variant="warning">Edit</Button>
                                </Link>
                                <DeleteBtn onDeleteHandler={onDeleteHandler}
                                authorObject={author}
                                successCallback={()=>removeFromDom(author._id)}
                                />
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
        
    )
}
export default Profile