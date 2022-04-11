import React, { Component } from 'react';
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    birthday() {
        this.setState({count: this.state.count + 1})
        return this;
    }
    render() {
        const {firstName,lastName,age,hairColor} = this.props;
        
        return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {age + this.state.count}</p>
            <p>Hair Color: {hairColor}</p>
            
            <button onClick={()=>this.birthday()}>Birthday Button for {firstName} {lastName}</button>
            <button onClick={ ()=> alert(`${firstName} turned ${age + this.state.count}!`)}>Alert Click Count</button>
            <button onClick={()=>this.setState({count:0})}>Reset</button>
        </div>
        )
    }   
}
export default PersonCard;
