import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const PlayerForm = (props) => {

    const {player,onChangeHandler,onSubmitHandler,errors,buttonText} = props;

    return (
        <div>
            <h1>PlayerForm</h1>
            <Form onSubmit={onSubmitHandler} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                    {
                        errors.playerName?
                        <span>{errors.playerName.message}</span>
                        :
                        <label>First Name</label>

                    } 
                    </Form.Label>
                    <Form.Control type="text" name="playName" placeholder="Player Name" value={player.playerName} onChange={(e)=> onChangeHandler(e)}>
                        {/* Insert inputs */}
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">Click</Button>
            </Form>
        </div>
    )
}
export default PlayerForm;