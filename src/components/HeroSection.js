import "./HeroStyles.css"
import homeheroimg from '../assets/homeheroimg1edit2.JPG'


const HeroSection = () =>{
    return(
        <div>
            <div className="herofirstcontainer" >
                <img className="herofirstcontainerimg" src={homeheroimg} alt="homeheroimage" />
            </div>
            <hr className='aboutmehorizontalline' />
        </div>
    )
}

export default HeroSection