import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteBtn = (props) => {
    const {playerObject,successCallback,confirmDelete,buttonText} = props;
    const navigate = useNavigate();

    const onDeleteHandler = () => {
        console.log(playerObject)
        axios.delete(`http://localhost:8000/api/player/${playerObject._id}`)
            .then((res)=> {
                console.log(`Delete Player: ${playerObject.playerName} ${playerObject.position} from mongoDB`,res.data)
                successCallback();
                // navigate("/");

            })
            .catch(err=> {
                console.log(err);
            })
    }

    return (
        <Button variant="danger" onClick={onDeleteHandler}>
            {buttonText}
        </Button>
    )
}
export default DeleteBtn;