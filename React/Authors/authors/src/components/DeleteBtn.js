import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const DeleteBtn = (props) => {
    const {authorObject,successCallback} = props;
    const navigate = useNavigate();
    const [socket] = useState(() => io(':8000'));

    const onDeleteHandler = () => {
        console.log(authorObject)
        axios.delete(`http://localhost:8000/api/author/${authorObject._id}`,{withCredentials:true})
            .then((res)=> {
                console.log(`Delete Author: ${authorObject.firstName} ${authorObject.lastName} from mongoDB`,res.data)
                successCallback();
                // notify the server a new author is added, notify client of new author
                socket.emit("deleted_author",authorObject._id);
                // disconnect before leaving
                socket.disconnect();
                // navigate("/");

            })
            .catch(err=> {
                console.log(err);
            })
    }

    return (
        <Button variant="danger" onClick={onDeleteHandler}>
            Delete
        </Button>
    )
}
export default DeleteBtn;