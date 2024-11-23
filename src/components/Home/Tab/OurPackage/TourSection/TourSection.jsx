import img1 from "../../../../../assets/images/tang.jpg";
import img2 from "../../../../../assets/images/beach1.jpg";
import img3 from "../../../../../assets/images/new-look-of-sonarga-after.jpg";
import img4 from "../../../../../assets/images/beach2.jpg";

const TourSection = () => {
  return (
    <div className="py-10 bg-gray-50 text-gray-800">
      {/* Section Title */}
      <h1 className="text-center text-4xl font-extrabold mb-8">
        Our Most Popular Tours
      </h1>

      {/* Tour Cards */}
      <div className="space-y-10">
        {/* Sylhet */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <p className="text-xl leading-8">
            <span className="text-2xl font-bold">SYLHET</span> <br />
            In northeastern Bengal, on the bank of the River Surma, sits the
            lovely city of Sylhet in Bangladesh. It serves as the district and
            divisional headquarters for the districts of Sylhet, Moulvibazar,
            Habiganj, and Sunamganj. The picture-perfect city has all the
            elements of a dreamy fairy tale setting, including a picturesque
            harbour, grand views of the neighbouring mountain range, and vibrant
            rows of wooden houses.
          </p>
          <img src={img1} alt="Sylhet" className="w-full rounded-xl shadow-lg" />
        </div>

        {/* Cox's Bazar */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src={img2}
            alt="Cox's Bazar"
            className="w-full rounded-xl shadow-lg"
          />
          <p className="text-xl leading-8">
            <span className="text-2xl font-bold">COX'S BAZAR</span> <br />
            Situated next to the Bay of Bengal, Cox's Bazar is a must-visit for
            tourists in Bangladesh. It features the world's longest sea beach,
            stretching over 120 kilometers. Miles of golden beach, surfing
            waves, waterfalls, and parks add to its charm. A major highlight is
            the Buddhist monastery, Aggmeda Khyang, with its massive bronze
            Buddha statues.
          </p>
        </div>

        {/* Sonargaon */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <p className="text-xl leading-8">
            <span className="text-2xl font-bold">SONARGAON</span> <br />
            Once a bustling river port, Sonargaon remains a treasure trove of
            history and culture. It is famous for its muslin trade and heritage
            sites. The Boro Sardar Bari, a restored mansion of a Hindu merchant,
            serves as a magnificent museum showcasing the area's rich past.
          </p>
          <img
            src={img3}
            alt="Sonargaon"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* St. Martin's Island */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src={img4}
            alt="St. Martin's Island"
            className="w-full rounded-xl shadow-lg"
          />
          <p className="text-xl leading-8">
            <span className="text-2xl font-bold">ST. MARTIN’S ISLAND</span> <br />
            St. Martin's Island, also known as Coconut Island, is the only
            coral island in Bangladesh. Located 9 kilometers south of Cox's
            Bazar, it offers serene beaches, coconut palms, and crystal-clear
            waters. It is a haven for nature lovers and adventurers alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourSection;

