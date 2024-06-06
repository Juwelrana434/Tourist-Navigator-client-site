import im1 from "../../../../../assets/images/adventure.jpg";
import im2 from "../../../../../assets/images/beach1.jpg";
import im3 from "../../../../../assets/images/saint.jpg";
import im4 from "../../../../../assets/images/beach2.jpg";
import im5 from "../../../../../assets/images/bankok.jpg";
import im6 from "../../../../../assets/images/gettyimages-465883815-612x612.jpg";
import im7 from "../../../../../assets/images/historical.jpg";
import im8 from "../../../../../assets/images/pic5.jpg";
import im9 from "../../../../../assets/images/wildlife-africa-tanzania-mammal.jpg";
import im10 from "../../../../../assets/images/moru.jpg";
import im11 from "../../../../../assets/images/statu.jpg";
import im12 from "../../../../../assets/images/pic3.jpg";
import TourSection from './../TourSection/TourSection';
import TourPlan from './../TourSection/TourPlan';
import TouristGuide from './../TourSection/TouristGuide';

const BeachHolyDay = () => {
  return (
    <div className="my-10"><div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 top-10">
    <div>
      <div className="relative">
        <img src={im4} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Saint martin
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im2} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Cox'x Bazar
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im1} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Brazil
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im3} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Saint martin
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im5} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Bankok
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im6} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Agra
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im7} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Itali
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im8} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Finland
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im9} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Africa
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im10} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Sahara
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im11} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          USA
        </p>
      </div>
    </div>
    <div>
      <div className="relative">
        <img src={im12} className="rounded-xl w-full h-[330px]" />
        <p className="bg-blue-700 text-white absolute top-[70%] right-[30%] px-4 py-2 rounded-3xl">
          Amazon
        </p>
      </div>
    </div>
  </div><div className="my-10 mx-10"><TourSection></TourSection>
  <div className=""><TourPlan></TourPlan></div>
  <div><TouristGuide></TouristGuide></div>
  </div></div>
  );
};

export default BeachHolyDay;
