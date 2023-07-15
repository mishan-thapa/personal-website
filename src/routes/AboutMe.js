//import Navbar from "../components/Navbar"
//import Footer from "../components/Footer"
import AboutMeHero from "../components/AboutMeHero"
import PageHeading from "../components/PageHeading"
import Skills from "../components/Skills"

const AboutMe = () =>{
    return(
        <div>
            <PageHeading heading="About Me"/>
            <AboutMeHero />
            <PageHeading heading="Skills"/>
            <Skills />
        </div>
    )
}

export default AboutMe