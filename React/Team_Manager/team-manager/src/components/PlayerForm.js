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
            <Form onSubmit={onSubmitHandler} className="form-container" >
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>
                    {
                        errors.playerName?
                        <span>{errors.playerName.message}</span>
                        :
                        <label>Player Name:</label>

                    } 
                    </Form.Label>
                    <Form.Control  type="text" name="playerName" placeholder="Player Name" value={player.playerName} onChange={(e)=> onChangeHandler(e)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                    {
                        errors.position?
                        <span>{errors.position.message}</span>
                        :
                        <label>Player's Position:</label>

                    } 
                    </Form.Label>
                    <Form.Control type="text" name="position" placeholder="Position" value={player.position} onChange={(e)=> onChangeHandler(e)}>
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">{buttonText}</Button>
            </Form>
        </div>
    )
}
export default PlayerForm;