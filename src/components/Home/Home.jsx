
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import TouristTab from './Tab/TouristTab';
import TourStore from './TouristStoreSection/TourStore';

const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Truist Guide</title>
      </Helmet>
            <Banner></Banner>
            <TouristTab></TouristTab>
            <TourStore></TourStore>        
            </div>
    );
};

export default Home;