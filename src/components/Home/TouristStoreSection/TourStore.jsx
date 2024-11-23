import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";

const TourStore = () => {
  const [stores, setStore] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://tourist-server-six.vercel.app/tourstory")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">Our Latest Tour Stories</h1>
      
      {/* Grid Layout for Tour Stories */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 px-4 sm:px-6 md:px-8">
        {stores.map((store) => (
          <div key={store._id} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            
            {/* Link to individual tour story */}
            <Link to={`tourstory/${store._id}`} className="flex flex-col">
              
              {/* Content Section */}
              <div className="flex flex-col p-6 bg-gray-100 rounded-t-2xl">
                <div className="chat chat-start mb-4">
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
                <h2 className="text-xl font-semibold text-gray-800 mt-2">{store.touristName}</h2>
              </div>

              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={store.image_1}
                  alt={`Image for ${store.touristName}'s tour`}
                  className="w-full h-[250px] object-cover rounded-b-2xl transition-transform duration-300 transform hover:scale-105"
                />
              </div>

            </Link>
          </div>
        ))}
      </div>

      {/* All Stories Button */}
      <Link to="/AllStory">
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            View All Stories
          </button>
        </div>
      </Link>
    </div>
  );
};

export default TourStore;
