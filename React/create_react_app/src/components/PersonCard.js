import React from 'react';
// components are what links data to our front end / html
// props short for properties are how we call in data's keys : values
const PersonCard = (props) => {
    return (
    <div>
        <h1>{props.firstName}, {props.lastName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </div>
    )
        
}
export default PersonCard;
