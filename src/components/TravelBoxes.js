
import './TravelCardStyles.css'
import TravelCard from "../components/TravelCard"
import TravelCardData from "../components/TravelCardData"


const TravelBoxes =()=>{
    return(
        <div className='travelcard'>
            {
                TravelCardData.map((val,ind)=>{
                    return(
                        <TravelCard
                        key={ind}
                        imgpath ={val.imgpath}
                        title = {val.title}
                        description ={val.description} />
                    )
                })
            }

        </div>
    )
}

export default TravelBoxes