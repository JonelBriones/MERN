import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavigatePages from '../components/navigatePages/NavigatePages';
import { ProjectsData } from '../components/Projects/ProjectsData';
const Projects = (props) => {
    const navigate = useNavigate();
    const redirect = (page) => {
        navigate(page);
    }
    return (
        <div className='home-container'>
        <div>
            <NavigatePages
            left={'home'}
            page={'Projects'}
            right={'blog'}
            />
            <a href={'https://github.com/JonelBriones/solo_project/tree/master/Gym_App'}>link</a>
            <div className='home-content'>
                <div className='projects-flow'>
                    {
                        ProjectsData.map((project,index)=>(
                        <div key={project._id} className='project-card' style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                        }}   onClick={()=>redirect(`/project/${project._id}`)}>
                            <a href={project.link} className="links">
                            <div className='project-content'>
                                <h3 className='project-title'>{project.name}</h3>
                                <div className='project-body'>
                                <p>{project.description}</p>
                                <p className='project-btn'>View</p>
                                </div>
                            </div>
                            </a>
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