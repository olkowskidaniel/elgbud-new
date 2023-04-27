import "./offer-page.styles.scss";
import { useQuery, gql } from '@apollo/client';
import Slider from "../../components/slider/slider.component";

const GET_OFFERS = gql`
    query Offers {
        offers {
            id
            offerTitle
            images {
              url
            }
            totalPrice
            pricePerMeter
            houseSurface
            landSurface
            rooms
            description {
                text
            }
        }
    }  
`;

const OfferPage = () => {
    const { loading, error, data } = useQuery(GET_OFFERS);
    if(loading) return <p>Loading..</p>
    if(error) return <p>{error.message}</p>
    return (
        <div className="offer-page-container">
            <Slider key={data.offers.id} slides={data.offers} sliderWidth={400}/>
        </div>
    )
}

export default OfferPage;