import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const AllPlayers = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <Link to={"/add"}>
                <button>Add Player</button>
            </Link>
            
            <h1>List of Players</h1>
        </div>
    )
}
export default AllPlayers;