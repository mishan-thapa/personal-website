import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeading from "../components/PageHeading"
import TravelBoxes from "../components/TravelBoxes"

const Travel = () =>{
    return(
        <div>
            <Navbar />
            <PageHeading heading="Recent Travels"/>
            <TravelBoxes />
            <Footer />
        </div>
    )
}

export default Travel