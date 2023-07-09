import './ProjectCardStyles.css'
//import pimg1 from '../assets/project-icon-8.png'
import { Component } from 'react'

class ProjectCard extends Component {
    render(){
        return(
            <div className='projectCard'>
                <div className='pcard-left'>
                    <img className='projectimg' src={this.props.imgpath}alt="pimg1"  />
                </div>
                <div className='pcard-right'>
                    <div className='pcard-right-heading'>
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className='pcard-right-description'>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ProjectCard