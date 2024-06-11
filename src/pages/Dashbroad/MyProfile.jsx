import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";


const MyProfile = () => {
const {user, logOut} =useAuth();
const handleAddStory = (event) => {
  event.preventDefault();
  const form = event.target;
  const touristName = user.displayName;
  const photo = user.photoURL;
  const email = user.email;
const   image_1 = form.photo.value;
const  tour_type = form. tour_type.value;
const  excerpt = form. message.value;
const title = form.trip_title.value;
// const image_url =  imageUpload(image)
  const story = {
   
    
    email,
    photo,
    touristName,
    excerpt,
    title,
     image_1,
     tour_type
    
  }; // Fixed property name
  // console.log(addComment);



  // send to server

  fetch("http://localhost:8000/story", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(story),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Add story successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
};
    return (
        <div>
          <div className="flex gap-6"><img src={user.photoURL } />  
         <div> <h1>{user.email}</h1>
          <h1>{user.displayName
          }</h1></div></div>
          <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          <p>Logout</p>
                        </div>
          <div><div>
        <div className=" text-black font-bold mx-auto  w-full m-4">
          <h1 className="text-center pt-6 text-[25px]">Make A story</h1>

          <form onSubmit={handleAddStory}>
          <div className=" bg-[#eef3f8]">
            <div className="lg:px-10 h-full pt-8 grid grid-cols-2 gap-6">
            

            
              
              <div>
              <label>Tour Type</label>
               <input
                type="text"
                name="tour_type"
                placeholder=
              "trip_type"
                className="w-full p-3 mt-2"
              
              />
              
              <label>Tour Title</label>
              <input
                type="text"
                name="trip_title"
                placeholder=
              "tour_title"
                className="w-full p-3 mt-2"
               
              />

              <br /></div>
              <div className=""><label>Write a Message</label>
              <textarea
                type="text"
                name="message"
                required
                placeholder= 'write short description'
                className="w-full p-3 mt-4"
               
              />

              <br />
              <label>Upload photo</label>
              <input
                type="text"
                name="photo"
                placeholder="insert photoUrl*"
                className="w-full p-3"
                
              /></div>
            </div>
           
             
            </div>
            <input
              type="submit"
              value="Save & Continue"
              className="w-full btn btn-primary my-6"
            />
            
          </form>
        </div>
        
      </div></div>
          
        </div>
    );
};

export default MyProfile;