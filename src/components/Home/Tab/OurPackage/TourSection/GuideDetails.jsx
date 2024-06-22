import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import useAuth from "../../../../../hooks/useAuth";

const GuideDetails = () => {
  const { user, logOut } = useAuth();
  const guides = useLoaderData();
  const {
    name,country,expertise,languages_spoken,educational_qualification,image_url
  } = guides;
// console.log(guides);

// user feedbck 
const handleAddComment = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = user.displayName;
  const photo = user.photoURL;
  const email = user.email;
  const number = form.number.value;
  const message = form.text.value;

  const addComment = {
    number,
    message,
    email,
    photo,
    name,
  }; // Fixed property name
  // console.log(addComment);
  
  // send to server

  fetch("https://tourist-server-six.vercel.app/comment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addComment),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Add message successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        
      }
    });
};

  return (
    <div className="">
      <div className="grid lg:grid-cols-2">
    
        
          <ul>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <img
                  src={image_url}
                  className="w-[310px] h-[310px] rounded-xl m-4"
                />
              </div>
              <li className="p-6 lg:md:py-10">
                <strong>Name</strong>:{name}
                <br />
                <strong>Expertise</strong>: {expertise[0]}
                <span>{expertise[1]},</span>
                <br />
                <strong>Languages Spoken</strong>: {languages_spoken[0]}
                ,<span>{languages_spoken[1]}</span>
                <br />
                <strong>Country</strong>: {country}
                <br />
                <strong>Education Qualification</strong>: {educational_qualification}
                <br />
                <strong>email:</strong>:   maria.garcia@example.com
        
                <br />
                <strong> phone:</strong> +31 20 123 4567
              </li>
            </div>
          </ul>
        
      </div>
       <div>
          <div className="bg-[#f0f1f4] text-black font-bold mx-auto lg:w-[40%] md:w-[60%] w-full m-4">
            <h1 className="text-center pt-6 text-[35px]">Send us a Message </h1>

            <form onSubmit={handleAddComment}>
              <div>
                {/* <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name*"
                  className="w-full p-2 mt-4"
                />

                <br />
                <input
                  type="photo"
                  name="photo"
                  placeholder="photoUrl*"
                  className="w-full p-2 mt-4"
                  readOnly="true"
                />

                <br />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                  className="w-full p-2 mt-4"
                /> */}
                <br />
                <input
                  type="number"
                  name="number"
                  placeholder="Give us Rating out of five*"
                  min="1" max="5"
                  className="w-full p-2 mt-4"
                />
                <br />
                <textarea
                  type="text"
                  name="text"
                  rows="4"
                  required
                  placeholder="massage"
                  className="w-full p-2 mt-4"
                />
                <br />
              </div>

              <input
                type="submit"
                value="Send Message"
                className="w-full btn btn-primary"
              />
            </form>
          </div>
        </div>
    </div>
  );
};

export default GuideDetails;
