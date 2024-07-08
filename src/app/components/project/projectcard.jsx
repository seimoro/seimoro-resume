
import { NavLink } from 'react-router-dom';
import Btn from '../btn/btn';
import './style.css'

const ProjectCard = (props) => {


    return (
        <div className="projectcard">
            <div className="project-title">
                <h1> {props.title} </h1>
            </div>
            <div className="project-content">
                {props.stack.map((item) => {
                    return (<p>-{item}</p>)
                })}
            </div>
            <NavLink className='link' to={props.link}> <Btn> Подробнее </Btn> </NavLink>
        </div>
    );
}

export default ProjectCard;