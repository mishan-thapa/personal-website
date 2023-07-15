
import ProjectCard from "../components/ProjectCard"
import PageHeading from "../components/PageHeading"

import ProjectCardData from "../components/ProjectCardData"

const Projects = () =>{
    return(
        <div>
            <PageHeading heading="Recent Projects"/>
            {
                ProjectCardData.map((ProjectCardData) =>
                 <ProjectCard title = {ProjectCardData.title} imgpath = {ProjectCardData.imgpath} description ={ProjectCardData.description} />)
            }
                        <hr className='aboutmehorizontalline' />
        </div>
    )
}

export default Projects