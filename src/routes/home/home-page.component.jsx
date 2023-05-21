import "./home-page.styles.scss";
// import { useQuery, gql } from '@apollo/client';
import HomeWelcome from "../../components/home-welcome/home-welcome.component";


// const GET_OFFERS = gql`
//     query Offers {
//         offers {
//             id
//             offerTitle
//             images {
//               url
//             }
//             totalPrice
//             pricePerMeter
//             houseSurface
//             landSurface
//             rooms
//             description {
//                 text
//             }
//         }
//     }  
// `;


const HomePage = () => {
    // const { loading, error, data } = useQuery(GET_OFFERS);
    // if(loading) return <p>Loading..</p>
    // if(error) return <p>{error.message}</p>
    return (
        <div className="home-page-container">
            <HomeWelcome />
        </div>
    )
}

export default HomePage;