import React, { useState} from 'react';
// components are what links data to our front end / html
// props short for properties are how we call in data's keys : values
const PersonCard = (props) => {
    const [count, setCount] = useState(0); // 0 is our starting value
    
    // variable handleClick will be return the same result as count + 1 
    // const handleClick = () => {
    //     setCount(count + 1);
    // }

    // destructuring our props into local variables
    // {props.age} == {props}
    // example {age, firstName, lastName, hairColor,} == {props.etc}
    const {age} = props;

    return (
    <div>
        <h1>{props.firstName}, {props.lastName}</h1>
        <p>Age: {age + count}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={() => setCount(count + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        <button onClick={ ()=> alert(`${props.firstName} turned ${age + count}!`)}>Alert Click Count</button>
    </div>
    )
        
}
export default PersonCard;
