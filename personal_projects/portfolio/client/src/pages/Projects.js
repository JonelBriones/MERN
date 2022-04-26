import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavigatePages from '../components/navigatePages/NavigatePages';
import ProjectsData from '../ProjectsData';
const Projects = (props) => {
    const navigate = useNavigate();
    const redirect = (page) => {
        navigate(page);
    }
    const [projects,setProjects] = useState([
        {
            _id:0,
            image:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60',
            name: "portfolio",
            tools: "javascript,html,css,react",
            description: "my portfolio as a software engineer"
        },
        {
            _id:1,
            image:'https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2plY3R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            name: "bug tracker",
            tools: "python,html,css",
            description: "tracks bugs"
        },
        {
            _id:2,
            image:'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvamVjdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60',
            name: "eccomerce",
            tools: "javascript,html,css,react,express,node.js,mongoDb",
            description: "A full CRUD application using the MERN stack"
        },
        {
            _id:3,
            image:'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            name: "test",
            tools: "javascript,html,css,react,express,node.js,mongoDb",
            description: "A full CRUD application"
        },
        {
            _id:4,
            image:'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            name: "test 2",
            tools: "javascript,html,css,react,express,node.js,mongoDb",
            description: "A full CRUD application"
        },
    ])
    return (
        <div className='home-container'>
        <div>
            <NavigatePages
            left={'home'}
            page={'Projects'}
            right={'blog'}
            />
            <div className='home-content'>
                <div className='projects-flow'>
                    {
                        projects.map((project,index)=>(
                        <div key={project._id} className='project-card' style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                        }} onClick={()=>redirect(`/project/view`)}>
                            <div className='project-content'>
                                <h3 className='project-title'>{project.name}</h3>
                                <div className='project-body'>
                                <p>{project.description}</p>
                                <p className='project-btn'>View</p>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
    )
}
export default Projects;