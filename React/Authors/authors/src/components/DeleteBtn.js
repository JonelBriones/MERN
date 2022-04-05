import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteBtn = (props) => {
    const {authorObject,successCallback} = props;
    const navigate = useNavigate();

    const onDeleteHandler = () => {
        console.log(authorObject)
        axios.delete(`http://localhost:8000/api/author/${authorObject._id}`)
            .then((res)=> {
                console.log(`Delete Author: ${authorObject.firstName} ${authorObject.lastName} from mongoDB`,res.data)
                successCallback();
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