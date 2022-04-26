import React from 'react';
import NavigatePages from '../components/navigatePages/NavigatePages';
const Blog = (props) => {
    return (
        <div className='home-container'>
            <NavigatePages
            left={'projects'}
            page={'Blog'}
            right={'contact'}
            />
            <div className='home-content'>
            </div>
        </div>
    )
}
export default Blog;