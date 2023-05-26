import "./home-welcome.styles.scss";    
import homePageHouse from "../../assets/images/home-page-house.jpg";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";


const HomeWelcome = () => {
    return (
        <div className="home-welcome-container" style={{backgroundImage: `url(${homePageHouse})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            <div className="home-welcome-box">
                <p>
                    ELGBUD
                </p>
                <p>
                    kompleksowa budowa domów jednorodzinnych
                </p>
                <div>
                    <IconContext.Provider value={{className: "home-welcome-icon"}}>
                        <div className="item-wrapper">
                            <i>
                                <BiCheckCircle />
                            </i>
                            <span>stan surowy</span>
                        </div>
                        <div className="item-wrapper">
                            <i>
                                <BiCheckCircle />
                            </i>
                            <span>stan deweloperski</span>
                        </div>
                        <div className="item-wrapper">
                            <i>
                                <BiCheckCircle />
                            </i>
                            <span>stan pod klucz</span>
                        </div>
                    </IconContext.Provider>
                </div>

                <button>ZOBACZ NASZĄ OFERTĘ</button>
            </div>
        </div>
    )
}

export default HomeWelcome;