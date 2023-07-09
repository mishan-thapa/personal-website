// import { Component } from 'react';
import './TravelCardStyles.css'


const TravelCard = (props) =>{
        return(
            <div class="image-container">
                <img className='travelimage' src={props.imgpath} alt="travelImage" />
                <div class="image-overlay">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        )
}

export default TravelCard