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
                    <img src={heroimg} alt="heroimg" className="custom-image" />
            </div>
            <div className="contentBox">
                <div className="box-parent">
                    <div className="line-container">
                        <div className="boxes">
                            Django
                        </div>
                        <div className="boxes">
                            ReactJs
                        </div>
                        <div className="boxes">
                            Figma
                        </div>
                    </div>
                    <div className="line-container">
                        <div className="boxes">
                            Python
                        </div>
                        <div className="boxes">
                            JavaScript
                        </div>
                        <div className="boxes">
                            Java
                        </div>
                    </div>
                    <div className="line-container">
                        <div className="boxes">
                            C++
                        </div>
                    </div>
                </div>
            </div>
            <div className="contentBox">
                <div className="content">
                    <h1>MISHAN</h1>
                    <h1>THAPA</h1>
                    <h1>KSHETRI</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection