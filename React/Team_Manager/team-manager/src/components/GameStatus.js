import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
const GameStatus = (props) => {
    return (
        <div>
            <Link to={"/"}>
                <button>Manage Players</button>
            </Link>
            <h1>Game Status</h1>
        </div>
    )
}   
export default GameStatus;