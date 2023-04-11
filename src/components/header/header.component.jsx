import "./header.styles.scss";

import logo from "../../assets/logo.png"
import HeaderContactBar from "../header-contact-bar/header-contact-bar.component";

const Header = () => {
    return (
        <div className="header-container">
            <HeaderContactBar />
            <div className="header-middle-bar"></div>
            <div className="logo-menu-container">
                <img src={logo} alt="ELGBUD LOGO" />
            </div>
        </div>
    )
}

export default Header;