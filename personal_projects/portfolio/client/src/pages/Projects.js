import React, {useState} from 'react';
const Projects = (props) => {
    const [projects,setPorjects] = useState([
        {
            name: "portfolio",
            tools: "javascript,html,css,react",
            description: "my portfolio as a software engineer"
        },
        {
            name: "bug tracker",
            tools: "python,html,css",
            description: "tracks bugs"
        },
        {
            name: "eccomerce",
            tools: "javascript,html,css,react,express,node.js,mongoDb",
            description: "A full CRUD application"
        },
        {
            name: "test",
            tools: "javascript,html,css,react,express,node.js,mongoDb",
            description: "A full CRUD application"
        },
        {
            name: "test 2",
            tools: "javascript,html,css,react,express,node.js,mongoDb",
            description: "A full CRUD application"
        },
    ])
    return (
        <div className='home-container'>
        <div>
            <div className='home-content'>
                <h1>Projects.</h1>
                <div className='projects-flow'>
                {
                    projects.map((project,index)=>(
                    <div key={index} className='project-columns'>
                        {project.name}
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