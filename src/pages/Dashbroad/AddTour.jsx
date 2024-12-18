import { useForm } from "react-hook-form";

import useAxiosPublic from "./../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTour = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        trip_title: data.name,
        tour_type: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image_url: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/tourtype", menuItem);
      // console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the tour.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Tour Type*</span>
              </label>
              <input
                type="text"
                placeholder="Tour Type "
                {...register("name", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex gap-6">
              {/* category */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option>Beach holyDays</option>
                  <option>Historical </option>
                  <option>Wild Life safaris</option>
                  <option>Adventure tour</option>
                </select>
              </div>

              {/* price */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* recipe details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tour Details</span>
              </label>
              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
              ></textarea>
            </div>

            <div className="form-control w-full my-6 flex-row justify-evenly">
              <div>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-xs"
                />
              </div>
              <div>
              
                <button className="btn">Add Tour</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTour;
