import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon
   
   
  } from "react-share";
  import avatarImg from "../../../assets/images/placeholder.jpg";


const AllStrory = () => {
const shareUrl = window.location.href
    const [stores, setStore] = useState([]);
    useEffect(() => {
      fetch("Allstory.json")
        .then((res) => res.json())
        .then((data) => setStore(data));
    }, []);
    return (
        <div>
        <Helmet>
        <title>Stroy</title>
      </Helmet>
          <div className="grid lg:md:grid-cols-2 gap-4">
        {stores.map((store) => (
          <div
            key={store._id}
           
          >
          <div className="grid lg:md:grid-cols-2 bg-base-100 shadow-xl">
          <div className="ml-4 py-4">
            <div className="chat chat-start">
  <div className="chat-image avatar">
  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={store && store.photoURL ? store.photoURL : avatarImg}
                      alt="profile"
                      height="40"
                      width="40"
                    />
                    </div>
  </div>
  <div className="chat-bubble">{store.excerpt}</div>
</div>


              <h2 className="card-title">{store.touristName}</h2>
              <div className="">
                <p>{store.title}</p>
                <p>Share your exciting Moment with others</p>
                <div>
                <FacebookShareButton url={shareUrl} ><FacebookIcon size={32} round={true} className="mr-6" /></FacebookShareButton>
                <WhatsappShareButton url={shareUrl} ><WhatsappIcon size={32} round={true}/></WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className="rounded-xl relative">
              <img
                src={store.image_1}
                className=" h-[300px] w-full hover:scale-101 rounded-xl p-4"
              />
              
            </div>
            </div>
          </div>
        ))}
      </div>  
        </div>
    );
};

export default AllStrory;