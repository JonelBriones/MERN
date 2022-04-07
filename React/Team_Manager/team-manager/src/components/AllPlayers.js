import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
const AllPlayers = (props) => {
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

    const removeFromDom = playerId => {
        console.log("Returning to Home Page")
        navigate("/")
        setPlayer(player.filter(onePlayer => onePlayer._id !== playerId));
    }
    // const sortedInAlphabeticalOrder = player.sort((a,b)=> {
    //     const ascended = (setPlayer === 'asc')?-1: 1;
    //     const descended = (setPlayer === 'des')?1: -1;
    //     return ascended * a.firstName.localeCompare(b.firstName);
    //     // return (orderType?
    //     // ascended * a.firstName.localeCompare(b.firstName):
    //     // descended * a.firstName.localeCompare(b.firstName))
    // })

    const setConfirmDelete = (onePlayerId) => {
        console.log(onePlayerId)
        console.log(onePlayerId.playerName)
        const deletePlayer = player.map((onePlayer)=> {
            if(onePlayerId === onePlayer._id) {
                onePlayer.confirmDelete = !onePlayer.confirmDelete
                console.log(onePlayer.confirmDelete)
            }
            return onePlayer;
        })
        setPlayer(deletePlayer);

        
    }
    return (
        <div>
            <Link to={"/add"}>
                <button>Add Player</button>
            </Link>
            <Link to={"/status/game"}>
                <button>Game Status</button>
            </Link>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        player.map((onePlayer)=> (
                            <tr key={onePlayer._id}>
                                <td><Link to={"/edit/" + onePlayer._id}>{onePlayer.playerName}</Link></td>
                                <td>{onePlayer.position}</td>
                                <td>
                                    {
                                        onePlayer.confirmDelete?
                                        <div>
                                            <DeleteBtn
                                            successCallback={()=>removeFromDom(onePlayer._id)}
                                            playerObject={onePlayer}
                                            buttonText={"Confirm"}/>
                                            <Button onClick={() =>setConfirmDelete(onePlayer._id)}>Cancel</Button> 
                                        </div>
                                        :
                                       <Button variant="danger" checked={onePlayer.confirmDelete} onClick={() =>setConfirmDelete(onePlayer._id)}>Delete</Button>

                                    }
                                    
                                </td>
                            </tr>
                            
                        ))
                        
                    }
                        
                </tbody>
            </Table>

        </div>
    )
}
export default AllPlayers;