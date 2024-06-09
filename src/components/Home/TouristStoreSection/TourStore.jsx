import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TourStore = () => {
    const [stores, setStore] = useState([]);
    useEffect(() => {
      fetch("store.json")
        .then((res) => res.json())
        .then((data) => setStore(data));
    }, []);
    console.log(stores);
    return (
        <div>
        <h1 className="text-center text-[25px] font-bold my-10">Our Latest Tour Story</h1>
            <div className="grid grid-cols-2 gap-4">
        {stores.map((store) => (
          <div
            key={store._id}
           
          >
          <Link  to={`story/${store.id}`}  className="grid lg:md:grid-cols-2 bg-base-100 shadow-xl">
          <div className="ml-4 py-4">
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">{store.excerpt}</div>
</div>


              <h2 className="card-title">{store.touristName}</h2>
              <div className="">
                
              </div>
            </div>
            <div className="rounded-xl relative">
              <img
                src={store.image_1}
                className=" h-[300px] w-full hover:scale-101 rounded-xl p-4"
              />
              
            </div>
            </Link>
          </div>
        ))}
      </div>
    <Link to='/AllStory'> <div className="mx-auto text-center my-10 text-[25px] font-bold"><button>All Stories</button></div></Link>
        </div>
    );
};

export default TourStore;
{/* <Link  to={`story/${store.id}`}>View Details</Link> */}