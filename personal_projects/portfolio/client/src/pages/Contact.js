import React from 'react';
import * as AiFillLinkedin from 'react-icons/ai';
import * as FaGithubSquare from 'react-icons/fa';
import * as FaInstagramSquare from 'react-icons/fa';
import {IconContext} from 'react-icons';
import NavigatePages from '../components/navigatePages/NavigatePages';

const Contact = (props) => {
    const subcribeHandler = () =>{

    }
    return (
        <div className='home-container'>
            <NavigatePages
            left={'blog'}
            page={'Contact'}
            right={'home'}
            />
            <div className='home-content'>
                <div className='form'>
                    <p>Subscribe for updates!</p>
                <form onSubmit={subcribeHandler}>
                    <div>
                        <input type="text" placeholder='First Name'></input>
                    </div>
                    <div>
                        <input type="text" placeholder='Last Name'></input>
                    </div>
                    <div>
                        <input type="text" placeholder='Email Address'></input>
                    </div>
                    <div className='btn'>
                    <button type="submit">Submit</button>
                    </div>
                </form>
                </div>
            <hr/>
            </div>
                <p className='footer'>Social Media</p>
            <IconContext.Provider value={{color: '#000000'}}>
            <footer>
                <span><a href="https://www.linkedin.com/in/jonel-briones-64bb8521b/" target="_blank"><AiFillLinkedin.AiFillLinkedin/></a></span>
                <span><a href="https://github.com/JonelBriones" target="_blank"><FaGithubSquare.FaGithubSquare/></a></span>
                <span><a href="https://www.instagram.com/ijonel906/" target="_blank"><FaInstagramSquare.FaInstagramSquare/></a></span>
            </footer>
            </IconContext.Provider>
            </div>
    )
}
export default Contact;