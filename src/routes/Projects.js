import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"
import PageHeading from "../components/PageHeading"

import ProjectCardData from "../components/ProjectCardData"

const Projects = () =>{
    return(
        <div>
            <Navbar />
            <PageHeading heading="Recent Projects"/>
            {
                ProjectCardData.map((ProjectCardData) =>
                 <ProjectCard title = {ProjectCardData.title} imgpath = {ProjectCardData.imgpath} description ={ProjectCardData.description} />)
            }
            <Footer />
        </div>
    )
}

export default Projects