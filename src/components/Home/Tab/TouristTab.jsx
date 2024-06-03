
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurPackage from './OurPackage/OurPackage';


const TouristTab = () => {
  return (
    <div className='lg:text-xl md:text-sm text-[12px] font-bold text-black mt-10'>
      <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Our Packages</Tab>
      <Tab>Meet our Tour Guide</Tab>
    </TabList>

    <TabPanel>
     <h2>content 01</h2>
    </TabPanel>
    <TabPanel>
    <OurPackage></OurPackage>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default TouristTab;