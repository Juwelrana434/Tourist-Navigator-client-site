import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon
   
   
  } from "react-share";

const TourStoryDetails = () => {
    const shareUrl = window.location.href //for sharing on facebook
const story =useLoaderData();
const {tour_type,
    title,
    touristName,
    tourPackage,
    dateOfTour,
    excerpt,image_url,
    price,
    image_1,
    image_2,
    image_3,
    durations,
    Transport,
    location} = story;
    console.log(story);
    return (
        <div>
        <Helmet>
        <title>Tour Details</title>
      </Helmet>
            <div
        
           
          >
          <div className="grid lg:md:grid-cols-2 bg-base-100 shadow-xl">
          <div className="ml-4 py-4">
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">{excerpt}</div>
</div>


              <h2 className="card-title">{touristName}</h2>
              <div className="">
                <p>{title}</p>
                <p>Share your exciting Moment with others</p>
                <div>
                <FacebookShareButton url={shareUrl} ><FacebookIcon size={32} round={true} className="mr-6" /></FacebookShareButton>
                <WhatsappShareButton url={shareUrl} ><WhatsappIcon size={32} round={true}/></WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className="rounded-xl relative">
              <img
                src={image_1}
                className=" h-[300px] w-full hover:scale-101 rounded-xl p-4"
              />
              
            </div>
            </div>
          </div>
        </div>
    );
};

export default TourStoryDetails;