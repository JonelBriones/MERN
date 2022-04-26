import NavigatePages from '../components/navigatePages/NavigatePages';
import React, {useState,useParams} from 'react';
import ProjectsData from '../ProjectsData';
import { useEffect } from 'react';
import axios from 'axios';
const ViewProject = (props) => {
    const [project,setProjects] = useState(
        {
            _id:0,
            image:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60',
            name: "portfolio",
            tools: "javascript,html,css,react",
            description: "my portfolio as a software engineer"
        },
    )
    return (
        <div className='home-container'>
        <div>
            <NavigatePages
            left={'projects'}
            page={'Project Name'}
            right={'home'}
            />
            <div className='home-content'>
                <div className='btn-resume'>
                <button>Download</button>
                <button>Github Repo</button>
                </div>
                <div>
                    <section>
                        <article>{project.description}</article>
                    </section>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ViewProject