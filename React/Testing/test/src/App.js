
import './App.css';
import React from 'react';
import Form from './Components/Form';

const ThisComponent = () => {
return ( 
	<div>
		<h1>This is from App</h1>
		<Form firstName={'Jonel'}/> 
    {/* props.firstName = {'input'} */}
	</div>
)
}
export default ThisComponent;
// *Each component has a purpose of rendering in html to the site
