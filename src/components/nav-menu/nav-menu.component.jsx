import "./nav-menu.styles.scss";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from "react";


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
]

const NavMenu = () => {
    const [isBurgerOpen, setburgerOpen] = useState(false)
    return (
        <div className="nav-menu-container">
            <div className="nav-menu-desktop">
            {
                menuItems.map(item => (
                    <NavLink to={item.link}>{item.title.toUpperCase()}</NavLink>
                ))
            }
            </div>
            <div className="nav-menu-smartphone">
                <Hamburger toggled={isBurgerOpen} toggle={setburgerOpen}/>
            </div>
        </div>
    )
}

export default NavMenu; 