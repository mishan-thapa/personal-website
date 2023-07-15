import { Component } from 'react'
import './PageHeadingStyles.css'

class PageHeading extends Component {
    render(){
        return(
            <div className='pageheading'>
                <h1 class="about-me-title">{this.props.heading}</h1>
            </div>
        )
    }
    
}

export default PageHeading