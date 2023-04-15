import "./nav-menu.styles.scss";
import { NavLink } from "react-router-dom";
import BurgerButton from "../burger-button/burger-button.component";

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
                <BurgerButton />
            </div>
        </div>
    )
}

export default NavMenu; 