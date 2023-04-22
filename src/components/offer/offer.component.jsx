import "./offer.styles.scss";

const Offer = ({title}) => {
    return (
        <div className="offer-container">
            <span className="offer-title">{title}</span>
        </div>
    )
}

export default Offer;