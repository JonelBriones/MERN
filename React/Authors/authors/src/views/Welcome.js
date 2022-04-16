import React from 'react';
import { Link } from 'react-router-dom';
const Welcome = (props) => {
    return (
        <div className='table-container'>
            <div>
            <h1>Welcome User!</h1>
            <p>This is my first deployed website that uses CRUD functionalities, created with the MERN stack. If you happen to be an experienced coder I would gladly take any tips/notes on what I should work/update on!</p>
            <span>In order to view the website, click <Link to={"/"}>here</Link> to Login!</span>
            </div>
            <footer>
                <ul>
                    <li><a href="https://www.linkedin.com/in/jonel-briones-64bb8521b/">LinkedIn</a></li>
                    <li><a href="https://github.com/JonelBriones">Github</a></li>
                </ul>
            </footer>
        </div>
    )
}
export default Welcome;