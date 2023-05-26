import "./home-why.styles.scss";
import { BsHouseUpFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { IconContext } from "react-icons/lib";


const whyItems = [
    {
        id: 0,
        title: "Kompleksowa realizacja",
        description: "Prowadzimy kompleksowo wszystkie etapy formalności urzędowych oraz budowy. Według decyzji klienta realizujemy budowy do stanu surowego, deweloperskiego lub pod klucz.",
        icon: BsHouseUpFill,
    }, 
    {
        id: 1,
        title: "Budowa według decyzji klienta",
        description: "Konsultujemy z klientem wszystkie etapy budowy. Dostosowujemy wykonanie do indywidualnych preferencji klientów.",
        icon: FaHandPointRight,
    }, 
    {
        id: 2,
        title: "Minimalizacja kosztów i formalności",
        description: "Zajmujemy się pozyskiwaniem warunków zabudowy, projektem, realizacją oraz pozwoleniem na użytkowanie. Nasze wieloletnie doświadczenie pomaga w optymalizacji kosztów oraz jakości budowy.",
        icon: HiCurrencyDollar,
    }, 
]


const HomeWhy = () => {
    return (
        <div className="home-why-container">
            <p>DLACZEGO WARTO BUDOWAĆ Z ELGBUD?</p>
            <div className="why-items-wrapper">
                <IconContext.Provider value={{className: "why-icon"}}>
                    {whyItems.map(({title, description, icon}) => {
                        const Icon = icon;
                        return (
                            <div className="why-item">
                                <i>
                                    <Icon/>
                                </i>
                                <p className="why-item-title">{title}</p>
                                <p className="why-item-desc">{description}</p>
                            </div> 
                        )
                        
                    })}
                </IconContext.Provider>
                
            </div>
        </div>
    )
}

export default HomeWhy;