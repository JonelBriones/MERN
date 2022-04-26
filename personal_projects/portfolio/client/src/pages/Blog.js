import React from 'react';
import NavigatePages from '../components/navigatePages/NavigatePages';
const Blog = (props) => {
    return (
        <div className='home-container'>
        <div>
            <div className='home-content'>
                <NavigatePages
                left={'projects'}
                page={'Blog'}
                right={'contact'}
                />
            </div>
        </div>
        </div>
    )
}
export default Blog;