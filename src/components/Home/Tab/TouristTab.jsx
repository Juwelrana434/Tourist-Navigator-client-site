
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurPackage from './OurPackage/OurPackage';
import TouristGuide from './OurPackage/TourSection/TouristGuide';


const TouristTab = () => {
  return (
    <div className='lg:text-xl md:text-sm text-[12px] font-bold text-black mt-10'>
      <Tabs>
    <TabList>
      
      <Tab>Our Packages</Tab>
      <Tab>Overview</Tab>
      <Tab>Meet our Tour Guide</Tab>
    </TabList>

    
    <TabPanel>
    <OurPackage></OurPackage>
    </TabPanel>
    <TabPanel>
     <h2>content 01</h2>
    </TabPanel>
    <TabPanel>
      <TouristGuide></TouristGuide>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default TouristTab;