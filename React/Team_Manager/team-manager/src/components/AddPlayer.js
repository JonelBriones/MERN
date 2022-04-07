import React, {useState} from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import PlayerForm from './PlayerForm';
const AddPlayer = (props) => {
    const navigate = useNavigate();
    const [errors, setError] = useState({});
    const [newPlayer,setNewPlayer] = useState({
        playerName: "",
        position: "",
    });
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/player",newPlayer)
            .then((res)=> {
                console.log(res.data)
                navigate("/");
            })
            .catch((err)=> {
                console.log(err.response.data.errors)
                setError(err.response.data.errors)
            })
    }
    const newChangeHandler = (e) => {
        const newPlayerObject = {...newPlayer};
        newPlayerObject[e.target.name] = e.target.value;
        console.log(newPlayerObject);
        setNewPlayer(newPlayerObject)
    }
     return (
        <div>
            <Link to={"/"}>
                <button>Manage Players</button>
            </Link>
            <PlayerForm 
            onSubmitHandler={onSubmitHandler}
            onChangeHandler={newChangeHandler}
            errors={errors}
            buttonText={"Add Player"}
            player={newPlayer}
            />
        </div>
    )
}
export default AddPlayer;