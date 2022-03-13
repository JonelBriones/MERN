//Form.js
import React from 'react';

const Form = (props) => {

    const {firstName, lastName} = props; //destructured
    return ( 
	<div>
		<h1>This is from Forms</h1>
        <p>My first name is {firstName} and my last name is {lastName}</p>
		{/* <p>{props.firstName}</p> after declaring the destructure */}
	</div>
)
}
export default Form;