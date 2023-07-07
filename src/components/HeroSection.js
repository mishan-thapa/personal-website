import "./HeroStyles.css"
import heroimg from '../assets/heroimg.png'

const HeroSection = () =>{
    return(
        <div className="Hero">
            <div className="contentBox">
                <div className="content">
                    <h1>Design and</h1>
                    <h1>Software</h1>
                    <h1>Enthusiast</h1>
                </div>
            </div>
            <div className="contentBox">
                    <img src={heroimg} alt="heroimg" class="custom-image" />
            </div>
            <div className="contentBox">
                a
            </div>
            <div className="contentBox">
                a
            </div>
        </div>
    )
}

export default HeroSection