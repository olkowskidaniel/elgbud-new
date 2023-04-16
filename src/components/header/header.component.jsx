import "./header.styles.scss";

import logo from "../../assets/logo.png"
import HeaderContactBar from "../header-contact-bar/header-contact-bar.component";
import NavMenu from "../nav-menu/nav-menu.component";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "../burger-menu/burger-menu.component";


const menuItems = [
    {
        id: 0,
        title: 'Strona Główna',
        link: '/'
    },
    {
        id: 1,
        title: 'O nas',
        link: '/about'
    }, 
    {
        id: 2,
        title: 'Oferta',
        link: '/offer'
    },
    {
        id: 3,
        title: 'Realizacje',
        link: '/realizations'
    },
    {
        id: 4,
        title: "Kontakt",
        link: '/contact'
    }
];

const Header = () => {
    const navigate = useNavigate();
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const onBugerMenuItemClicked = () => {
        setBurgerMenuOpen(false);
    }
    return (
        <div className={`header-container ${isBurgerMenuOpen && 'burger-menu-opened'}`}>
            <HeaderContactBar />
            <div className="header-middle-bar"></div>
            <div className="logo-menu-container">
                <img src={logo} alt="ELGBUD LOGO" onClick={() => {navigate("/")}}/>
                <NavMenu menuItems={menuItems} isBurgerMenuOpen={isBurgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen}/>
            </div>
            <BurgerMenu menuItems={menuItems} onBugerMenuItemClicked={onBugerMenuItemClicked}/>
        </div>
    )
}

export default Header;