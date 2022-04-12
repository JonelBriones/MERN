import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const UserForm = (props) => {

    const {user,onSubmitHandler,errors,onChangeHandler,buttonText,confirmReg} = props;

    return (
        <div>
            <h1>Gym App</h1>
            {
                confirmReg?
            <h1>{confirmReg}</h1>:
            <h1>Registration</h1>
            
            }
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>{
                        errors.firstName?
                        <span>{errors.firstName.message}</span>:
                        <span>First Name</span>
                    }</Form.Label>
                    <Form.Control type="text" name="firstName" value={user.firstName} onChange={(e)=>onChangeHandler(e)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>{
                        errors.lastName?
                        <span>{errors.lastName.message}</span>:
                        <span>Last Name</span>
                    }</Form.Label>
                    <Form.Control type="text" name="lastName" value={user.lastName} onChange={(e)=>onChangeHandler(e)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>{
                        errors.email?
                        <span>{errors.email.message}</span>:
                        <span>Email</span>
                    }</Form.Label>
                    <Form.Control type="text" name="email" value={user.email} onChange={(e)=>onChangeHandler(e)}/>
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
        </div>
    )
}
export default UserForm;