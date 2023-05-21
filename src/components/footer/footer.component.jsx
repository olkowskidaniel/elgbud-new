import "./footer.styles.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-company-info">
                <div className="footer-general-info">
                    <p>FIRMA BUDOWLANO-TRANSPORTOWA ELGBUD</p>
                    <p>Bartosz Marcinkowski</p>
                    <p>tel: <a href="tel:603121405">603 121 405</a></p>
                    <p>email: <a href="mailto:biuro@elgbud.pl">biuro@elgbud.pl</a></p>
                </div>
                <div className="footer-address">
                    <p>Elgiszewo 143</p>
                    <p>87-408 Ciechocin</p>
                    <p>pow. golubsko-dobrzyński</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;