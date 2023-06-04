import "./home-about.styles.scss";
import homeAboutImg from "../../assets/images/home-about.jpg";
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
    const navigate = useNavigate();
       return (
        <div className="home-about-container">
            <img className="home-about-img" src={homeAboutImg} alt="tiny house" />
            <div className="home-about-description">
                <p>O FIRMIE</p>
                <p>Elgbud to firma budowlana z wieloletnim doświadczeniem w budowie domów jednorodzinnych oraz budownictwie przemysłowym. Oferujemy usługę kompleksowej budowy domów jednorodzinnych zgodnie z potrzebami naszych klientów. 
                </p>
                <button onClick={() => navigate('/about')}>Dowiedz się więcej</button>
            </div>
        </div>
    )
}

export default HomeAbout;