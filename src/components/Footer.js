import './FooterStyles.css'
import {FaDiscord, FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';

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
                        < FaFacebook size={30} style={{marginRight :"1rem"}} />
                        < FaInstagram size={30} style={{marginRight :"1rem"}} />
                        < FaDiscord size={30} style={{marginRight :"1rem"}} />
                        < FaLinkedin size={30} style={{marginRight :"1rem"}} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer