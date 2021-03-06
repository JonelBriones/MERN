import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const UserLogin = (props) => {

    /* ------- USER LOGIN -------- */
    const {user,onSubmitHandler,errors,onChangeHandler,buttonText} = props;

    return (
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>{
                        errors?
                        <span>{errors}</span>:
                        <span>Username</span>
                    }</Form.Label>
                    <Form.Control type="text" name="username" value={user.username} onChange={onChangeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>{
                        errors?
                        <span>{errors}</span>:
                        <span>Password</span>
                    }</Form.Label>
                    <Form.Control type="text" name="password" value={user.password} onChange={onChangeHandler}/>
                </Form.Group>
                <Button type="submit">{buttonText}</Button>
            </Form>
    )
}
export default UserLogin;