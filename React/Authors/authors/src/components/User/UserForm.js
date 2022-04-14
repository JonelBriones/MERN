import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const UserForm = (props) => {

    const {user,onSubmitHandler,errors,onChangeHandler,buttonText,confirmReg} = props;

    return (
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>{
                        errors.username?
                        <span>{errors.username.message}</span>:
                        <span>Username</span>
                    }</Form.Label>
                    <Form.Control type="text" name="username" value={user.username} onChange={(e)=>onChangeHandler(e)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>{
                        errors.password?
                        <span>{errors.password.message}</span>:
                        <span>Password</span>
                    }</Form.Label>
                    <Form.Control type="text" name="password" value={user.password} onChange={(e)=>onChangeHandler(e)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>{
                        errors.confirmPassword?
                        <span>{errors.confirmPassword.message}</span>:
                        <span>Confirm Password</span>
                    }</Form.Label>
                    <Form.Control type="text" name="confirmPassword" value={user.confirmPassword} onChange={(e)=>onChangeHandler(e)}/>
                </Form.Group>
                <Button type="submit">{buttonText}</Button>
            </Form>
    )
}
export default UserForm;