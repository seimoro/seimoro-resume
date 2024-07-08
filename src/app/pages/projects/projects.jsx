import ProjectCard from '../../components/project/projectcard';
import './style.css'

const Projects = () => {
    return (
        <main className="projects">
            <div className="projects-container container">
                <ProjectCard
                    title='Frontend Dev'
                    stack={
                        [   
                            'React.js',
                            'HTML',
                            'CSS',
                            'Jotai',
                            'Redux',
                        ]
                    }
                    link = '/frontend'
                />
                <ProjectCard 
                    title='Музыка'
                    stack={
                        [
                            'Творческий проект',
                            'Концерты',
                            'Музыка на заказ',
                            'GameDev SoundWorks',
                            'Beats for Sale',
                        ]
                    }
                    //link = '/music'
                />
            </div>
        </main>
    );
}

export default Projects;