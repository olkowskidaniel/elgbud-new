import "./nav-menu.styles.scss";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';


const NavMenu = ({isBurgerMenuOpen, setBurgerMenuOpen, menuItems}) => {
    
    return (
        <div className="nav-menu-container">
            <div className="nav-menu-desktop">
            {
                menuItems.map(item => (
                    <NavLink key={item.id} to={item.link}>{item.title.toUpperCase()}</NavLink>
                ))
            }
            </div>
            <div className="nav-menu-smartphone">
                <Hamburger toggled={isBurgerMenuOpen} toggle={setBurgerMenuOpen}/>
            </div>
        </div>
    )
}

export default NavMenu; 