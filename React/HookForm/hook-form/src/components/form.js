
import React, { useState } from  'react';
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [hasBeenSubmitted, setHasbeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false); 
    const [lastNameError, setLastNameError] = useState(false); 
    const [emailError, setEmailError] = useState(false); 
    const [passwordError, setPasswordError] = useState(false); 
    const [confirmPasswordError, setConfirmPasswordError] = useState(false); 
    // 
    const firstNameValidator = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }
    const lastNameValidator = (e) => {
        setLastName(e.target.value);
        if(e.target.value < 1) {
            setLastNameError("Last Name is required!");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }
    const emailValidator = (e) => {
        setEmail(e.target.value);
        if(e.target.value < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    } 
    const passwordValidator = (e) => {
        setPassword(e.target.value);
        if(e.target.value < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    } 
    const confirmPasswordValidator = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value < 1) {
            setConfirmPasswordError("Password is required!");
        } else if (e.target.value !== password) {
            setConfirmPasswordError("Confirm Password must match Password!");
        }else {
            setConfirmPasswordError("");
        }
    }   
    
    //arrow function
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // create a javascript object to hold all of the values
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log(`Welcome ${newUser.firstName}`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasbeenSubmitted(true);
    };
    return(
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ firstNameValidator } />
                {
                    firstNameError?
                    <p>{ firstNameError }</p> :
                    ''
                }    
                </div>  
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ lastNameValidator } />
                {
                     lastNameError?
                    <p>{ lastNameError }</p> :
                    ''
                }  
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ emailValidator } />
                {
                     emailError?
                    <p>{ emailError }</p> :
                    ''
                }  
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ passwordValidator } />
                    {
                     passwordError?
                    <p>{ passwordError }</p> :
                    ''
                }  
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ confirmPasswordValidator } />
                    {
                     confirmPasswordError?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }  
                </div>
                {
                    confirmPasswordError ?
                    <input type="submit" value="Create User" disabled /> :
                    <input type="submit" value="Create User" />  
                } 
            </form>
    );
};
    
export default UserForm;
