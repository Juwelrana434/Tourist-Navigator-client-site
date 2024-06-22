import { useEffect, useState } from "react";


const GuideProfile = () => {
    const [guides, setGuide] = useState([]);
    useEffect(() => {
        fetch("https://tourist-server-six.vercel.app/guide")
          .then((res) => res.json())
          .then((data) => setGuide(data));
      }, []);
    return (
        <div>
            <div className="grid lg:grid-cols-2"> {
            guides.map((guide) => <ul key={guide._id}>
            <div className="grid lg:grid-cols-2 gap-4"><div><img src={guide.image_url} className="w-[310px] h-[310px] rounded-xl m-4" /></div>
            <li className="p-6 lg:md:py-10">
                    <strong>Name</strong>:{guide.name}<br />
                    <strong>Expertise</strong>: {guide?.expertise[0]} <span>{guide?.expertise[1]},</span><br />
                    <strong>Languages Spoken</strong>:  {guide?.languages_spoken[0]} ,<span>{guide?.languages_spoken[1]}</span>
                </li></div> </ul>
            )}</div>
        </div>
    );
};

export default GuideProfile;