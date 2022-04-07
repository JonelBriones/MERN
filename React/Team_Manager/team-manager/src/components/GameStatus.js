import React, {useEffect,useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
const GameStatus = (props) => {
    const navigate = useNavigate();
    const [player,setPlayer] = useState([]);
    // const [confirmDelete,setConfirmDelete] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/player")
            .then((res)=> {
                console.log(res.data);
                setPlayer(res.data)
            })
            .catch((err)=> {
                console.log(err);
            })
    },[])

    const changeColor = (playerId,index) => {
        console.log(playerId)
        const changeColor = player.map((onePlayer)=> {
            if(playerId === onePlayer._id) {
                if(index === 1) {
                onePlayer.playing = !onePlayer.playing
                console.log(onePlayer.playing)
                }
                else if (index === 2) {
                    onePlayer.notPlaying = !onePlayer.notPlaying
                    console.log(onePlayer.notPlaying)
                }
                else if (index === 3) {
                    onePlayer.undecided = !onePlayer.undecided
                    console.log(onePlayer.undecided)
                }
            }
            return onePlayer;
        })
        setPlayer(changeColor);
    }
    // const variantColor = ["success","danger","warning"];
    return (
        <div>
            <Link to={"/"}>
                <button>Manage Players</button>
            </Link>
            <h1>Game Status</h1>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        player.map((onePlayer)=> {

                            return (
                                <tr key={onePlayer._id}>
                                    <td><Link to={"/edit/" + onePlayer._id}>{onePlayer.playerName}</Link></td>
                                    <td>
                                    <Button variant=
                                    {
                                        onePlayer.playing?
                                        "success":"info"
                                    } 
                                    checked={onePlayer.playing} onClick={()=>changeColor(onePlayer._id,1)}>Playing</Button>
                                    
                                    <Button variant=
                                    {
                                        onePlayer.notPlaying?
                                        "danger":"info"
                                    } 
                                    checked={onePlayer.notPlaying} onClick={()=>changeColor(onePlayer._id,2)}>Not Playing</Button>
                                    
                                    <Button variant=
                                    {
                                        onePlayer.undecided?
                                        "warning":"info"
                                    } 
                                    checked={onePlayer.undecided} onClick={()=>changeColor(onePlayer._id,3)}>Undecided</Button>
                                    </td>
                                </tr>
                            )
                            })
                        
                    }
                        
                </tbody>
            </Table>
        </div>
    )
}   
export default GameStatus;