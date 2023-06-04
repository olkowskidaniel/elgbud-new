import "./footer.styles.scss";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";


const Footer = () => {
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDsQ9wGkx6UJBUdskQTwmxpSDP-t7ClHKY",
    });

    const center = useMemo(() => ({ lat: 53.06537864844581, lng: 18.921012831185873}), []);

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
            <div className="footer-map">
                <p>Znajdziesz nas tutaj:</p>
                    {!isLoaded ? (
                        <h1>Loading...</h1>
                        )            : (
                        <GoogleMap
                            mapContainerClassName="map-container"
                            center={center}
                            zoom={13}
                            >
                            <MarkerF position={{ lat: 53.06537864844581, lng: 18.921012831185873 }} animation={window.google.maps.Animation.BOUNCE} />
                        </GoogleMap>
                    )}
            </div>
        </div>
    )
}

export default Footer;