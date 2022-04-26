import React from 'react';
import {useNavigate} from 'react-router-dom'

// import CV from '../cv.pdf'
const Home = (props) => {
    const navigate = useNavigate();
    const redirect = (page) => {
        navigate(page);
    }
    return (
        <div className='home-container'>
            <div>
                <div className='home-content'>
                    <h1>hello world.</h1>
                    <h1>i am a full stack developer<br/> in the bay area.</h1>
                </div>
            <button className='btn-start' onClick={()=>redirect('/projects')}>
                <h1>Start</h1>
            </button> 
            </div>
        </div>
    )
}
export default Home;