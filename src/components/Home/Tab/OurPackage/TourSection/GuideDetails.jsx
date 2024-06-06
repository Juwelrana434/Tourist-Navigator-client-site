import { useLoaderData } from "react-router-dom";

const GuideDetails = () => {
  const guides = useLoaderData();
  const {
    name,country,expertise,languages_spoken,educational_qualification,image_url
  } = guides;
console.log(guides);
  return (
    <div>
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
    </div>
  );
};

export default GuideDetails;
