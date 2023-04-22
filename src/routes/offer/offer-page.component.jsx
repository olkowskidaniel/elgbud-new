import "./offer-page.styles.scss";
import Offer from "../../components/offer/offer.component";
import { useQuery, gql } from '@apollo/client';

const GET_OFFERS = gql`
    query Offers {
        offers {
        createdAt
        id
        offerTitle
        publishedAt
        updatedAt
        }
    }
`;

const OfferPage = () => {
    const { loading, error, data } = useQuery(GET_OFFERS);
    console.log(data.offers)
    return (
        <div>
            {
                data.offers.map((offer, index) => (
                    <Offer key={index} title={offer.offerTitle} />
                ))
            }     
        </div>
    )
}

export default OfferPage;