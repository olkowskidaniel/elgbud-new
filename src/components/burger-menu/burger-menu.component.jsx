import "./burger-menu.styles.scss";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({menuItems, onBugerMenuItemClicked}) => {
    return (
        <div className="burger-menu-container">
            {menuItems.map(item => ( 
                <div className="burger-menu-item" key={item.id}>
                    {<NavLink to={item.link} onClick={onBugerMenuItemClicked}>{item.title.toUpperCase()}</NavLink>
                    }
                </div>
            ))}
        </div>
    )
}

export default BurgerMenu;