import "./header-contact-bar.styles.scss";
import {FaPhoneAlt} from 'react-icons/fa';
import {HiEnvelope} from 'react-icons/hi2';
const HeaderContactBar = () => {
    return(
        <div className="header-contact-bar-container">
            <div className="contact-container">
                <FaPhoneAlt />
                <a href="tel:603121405">603 121 405</a>
            </div>
            <div className="contact-container">
                <HiEnvelope />
                <a href="mailto:biuro@elgbud.pl">biuro@elgbud.pl</a>
            </div>
        </div>
    )
}

export default HeaderContactBar;