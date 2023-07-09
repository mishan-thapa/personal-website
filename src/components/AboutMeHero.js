import './AboutMeHeroStyles.css'
import myprofile from '../assets/myprofile2.JPG'

const AboutMeHero = () =>{
    return(
        <div className='aboutmemaincontainer'>
            <div className='aboutmeherocontainer'>
                <div className='aboutmeherocontent'>
                    <img className='myprofile' src={myprofile} alt="myprofile" />
                </div>
                <div className='aboutmeherocontent'>
                    <h1>Who is Mishan?</h1>
                    <p >I am currently pursuing a degree in computer engineering,
                        where I actively engage in the design and construction of websites.
                        Additionally, I possess a strong inclination towards the fields of data science,
                        machine learning, and neural networks. In my research endeavors, I have focused on
                        the topic of Nepali plagiarism, and I have also successfully developed several
                        websites. Apart from my academic pursuits, I find immense joy in traveling,
                        particularly engaging in hiking and trekking activities. Furthermore, I hold a
                        keen interest in movies, football, and music.</p>
                    <h3>at night, I AM BATMAN</h3>
                </div>
            </div>
            <hr className='aboutmehorizontalline' />
        </div>
    )
}

export default AboutMeHero