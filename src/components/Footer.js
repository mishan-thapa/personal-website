import './FooterStyles.css'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='contents'>
                        <h5>
                            <FaHome size={20} style={{marginRight :"1rem"}} />
                            Chitwan, Nepal
                        </h5>
                        <h4>
                            <FaPhone size={20} style={{marginRight :"1rem"}} />
                            9865158612
                        </h4>
                        <h4>
                            <FaMailBulk size={20} style={{marginRight :"1rem"}} />
                            kshetrimishan123@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>let's be friends</h4>
                    <div className='social'>
                        <a href='https://www.facebook.com/kshetrimishanthapa/'>
                            < FaFacebook size={30} style={{marginRight :"1rem"}} />
                        </a>
                        <a href='https://www.instagram.com/maximus_ici/'>
                            < FaInstagram size={30} style={{marginRight :"1rem"}} />
                        </a>
                        <a href='https://www.linkedin.com/in/mishan-thapa-kshetri-645bb622a/'>
                            < FaLinkedin size={30} style={{marginRight :"1rem"}} />
                        </a>
                        
                        
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer