import React, {useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthorForm = (props) => {
    const {errors, newAuthor, onSubmitHandler,
    onChangeHandler,buttonText
    } = props;

    return (
        <Form onSubmit={onSubmitHandler} className="form-container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    {
                        errors.firstName?
                        <span>{errors.firstName.message}</span>:
                        <label>First Name</label>
                    } 
                </Form.Label>
                <Form.Control type="text" name="firstName" placeholder="First Name"
                    value={newAuthor.firstName} onChange= {(e)=> onChangeHandler(e)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    {
                        errors.lastName?
                        <span>{errors.lastName.message}</span>:
                        <label>Last Name</label>
                    } 
                </Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Last Name"
                    value={newAuthor.lastName} onChange= {(e)=> onChangeHandler(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit">{buttonText}</Button>
        </Form>
    )
}
export default AuthorForm;