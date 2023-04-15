import "./header.styles.scss";

import logo from "../../assets/logo.png"
import HeaderContactBar from "../header-contact-bar/header-contact-bar.component";
import NavMenu from "../nav-menu/nav-menu.component";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header-container">
            <HeaderContactBar />
            <div className="header-middle-bar"></div>
            <div className="logo-menu-container">
                <img src={logo} alt="ELGBUD LOGO" onClick={() => {navigate("/")}}/>
                <NavMenu />
            </div>
        </div>
    )
}

export default Header;