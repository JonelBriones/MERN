import React, { Component } from 'react';
class PersonCard extends Component {
    render() {
        const {firstName,lastName,age,hairColor} = this.props;
        
        return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            
            {/* <button onClick={count()}>Birthday Button for {firstName} {lastName}</button>
            <button onClick={ ()=> alert(`${firstName} turned ${age + count}!`)}>Alert Click Count</button> */}
        </div>
        )
    }   
}
export default PersonCard;
