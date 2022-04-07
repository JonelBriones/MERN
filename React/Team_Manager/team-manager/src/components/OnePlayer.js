import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {useParams,Link,useNavigate} from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import Button from 'react-bootstrap/Button';

const OnePlayer = (props) => {
    const [updatePlayer,setUpdatePlayer] = useState({});
    const [confirmDelete,setConfirmDelete] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player/${id}`)
            .then((res)=> {
                console.log(res.data)
                setUpdatePlayer(res.data);
            })
            .catch((err)=> {
                console.log(err)
            })
    },[])

    const removeFromDom = playerId => {
        console.log("Returning to Home Page")
        navigate("/")
    }
    return (
        <div>
            <Link to={"/"}>
                <button>Manage Players</button>
            </Link>
            <Link to={"/add"}>
                <button>Add Player</button>
            </Link>
            <h1>{updatePlayer.playerName}</h1>
            <p>Position: {updatePlayer.position}</p>
            <p>Status:
                {
                    updatePlayer.playing?
                    " Playing":updatePlayer.notPlaying?
                    " Not Playing":
                    " Undecided"
                }
            </p>
            {
                confirmDelete !== true?
                <Button variant="danger" onClick={() =>setConfirmDelete(true)}>Delete</Button>:
                <div>
                <DeleteBtn
                successCallback={()=>removeFromDom(updatePlayer._id)}
                playerObject={updatePlayer}
                buttonText={"Confirm"}/>
                <Button onClick={() =>setConfirmDelete(false)}>Cancel</Button> 
                </div>

            }
        </div>
    )
}
export default OnePlayer;