import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TouristGuide = () => {
const [guides, setGuide] = useState([]);
    useEffect(() => {
        fetch("https://tourist-server-six.vercel.app/guide")
          .then((res) => res.json())
          .then((data) => setGuide(data));
      }, []);
    //   console.log(guides);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-6"> Tour Guides</h2>
           <div className="grid lg:grid-cols-2"> {
            guides.map((guide) => <ul key={guide._id}>
            <Link to={`/beach/${guide._id}`}><div className="grid lg:grid-cols-2 gap-4"><div><img src={guide.image_url} className="w-[310px] h-[310px] rounded-xl m-4" /></div>
            <li className="p-6 lg:md:py-10">
                    <strong>Name</strong>:{guide.name}<br />
                    <strong>Expertise</strong>: {guide?.expertise[0]} <span>{guide?.expertise[1]},</span><br />
                    <strong>Languages Spoken</strong>:  {guide?.languages_spoken[0]} ,<span>{guide?.languages_spoken[1]}</span>
                </li></div></Link></ul>
            )}</div>
    {/* // <ul className="grid grid-cols-2">
    // <div><img src="" alt="" />
    // <li>
    //         <strong>Name</strong>: John Smith<br />
    //         <strong>Expertise</strong>: London and Paris<br />
    //         <strong>Languages Spoken</strong>: English, French
    //     </li></div> */}
    {/* <div><img src="" alt="" /><li>
            <strong>Name</strong>: John Smith<br />
            <strong>Expertise</strong>: London and Paris<br />
            <strong>Languages Spoken</strong>: English, French
        </li></div>
    <div><img src="" alt="" /><li>
            <strong>Name</strong>: John Smith<br />
            <strong>Expertise</strong>: London and Paris<br />
            <strong>Languages Spoken</strong>: English, French
        </li></div>
    <div><img src="" alt="" /><li>
            <strong>Name</strong>: John Smith<br />
            <strong>Expertise</strong>: London and Paris<br />
            <strong>Languages Spoken</strong>: English, French
        </li></div>
         */}
       
    
        </div>
    );
};

export default TouristGuide;

