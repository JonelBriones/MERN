import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PlayerForm from './PlayerForm';
const Update = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <Link to={"/add"}><button>Add Player</button></Link>
            <Link to={"/"}><button>Home</button></Link>
            <h1>Update Player</h1>
            <PlayerForm/>
        </div>
    )
}
export default Update;