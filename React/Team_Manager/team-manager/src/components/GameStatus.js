import React, {useEffect,useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
const GameStatus = (props) => {
    const navigate = useNavigate();
    const [player,setPlayer] = useState([]);


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
        const changeColor = player.map((onePlayer)=> {
            if(playerId === onePlayer._id) {
                if(index === 1) {
                onePlayer.playing = !onePlayer.playing
                onePlayer.notPlaying = false
                onePlayer.undecided = false
                }
                else if (index === 2) {
                    onePlayer.notPlaying = !onePlayer.notPlaying
                    onePlayer.playing = false
                    onePlayer.undecided = false
                }
                else if (index === 3) {
                    onePlayer.undecided = !onePlayer.undecided
                    onePlayer.playing = false
                    onePlayer.notPlaying = false
                }
                // else if(
                //     !onePlayer.playing && 
                //     !onePlayer.notPlaying && 
                //     !onePlayer.undecided &&
                //     index === 1 || 2)
                // {
                //     onePlayer.undecided = true
                //     if(onePlayer.undecided) {
                //         setPlayerStatus(onePlayer)
                //         console.log(onePlayer)
                //     }
                // }
            }

            axios.put("http://localhost:8000/api/player/" + onePlayer._id,onePlayer)
            .then((res)=> {
            })
            .catch((err) => {
            })

            return onePlayer
        })
        setPlayer(changeColor)
    }


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
                                        "success"
                                        :"info"
                                    } 
                                     onClick={()=>changeColor(onePlayer._id,1)} disabled={onePlayer.playing}>Playing</Button>
                                    
                                    <Button variant=
                                    {
                                        onePlayer.notPlaying?
                                        "danger":"info"
                                    } 
                                     onClick={()=>changeColor(onePlayer._id,2)} disabled={onePlayer.notPlaying}>Not Playing</Button>
                                    
                                    <Button variant=
                                    {
                                        onePlayer.undecided?
                                        "warning":"info"
                                    } 
                                     onClick={()=>changeColor(onePlayer._id,3)} disabled={onePlayer.undecided}>Undecided</Button>
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