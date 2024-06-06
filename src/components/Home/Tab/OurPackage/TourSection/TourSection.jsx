import img1 from "../../../../../assets/images/tang.jpg";
import img2 from "../../../../../assets/images/beach1.jpg";
import img3 from "../../../../../assets/images/new-look-of-sonarga-after.jpg";
import img4 from "../../../../../assets/images/beach2.jpg";

const TourSection = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-6">
        Our Most Popular Tours
      </h1>
      <div>
        <div className="grid md:lg:grid-cols-2 grid-cols-1 gap-6">
          <p className="text-xl py-4">
            <span className="text-2xl font-bold">SYLHET</span> <br /> In
            northeastern Bengal, on the bank of the River Surma, sits the lovely
            city of Sylhet in Bangladesh. It serves as the district and
            divisional headquarters for the districts of Sylhet, Moulvibazar,
            Habiganj, and Sunamganj.The picture-perfect city has all the
            elements of a dreamy fairy tale setting, including a picturesque
            harbour,
          </p>
          <img src={img1} className="w-full rounded-xl" />
        </div>
        <p className="text-xl py-4">
          grand views of the neighbouring mountain range, and vibrant rows of
          wooden houses. It's not difficult to imagine Sylhet as one of the most
          gorgeous fairytale settings come to life with its serene, tree-lined
          parks and cobblestone walkways.
        </p>
      </div>
      <div>
        <div className="grid md:lg:grid-cols-2 grid-cols-1 gap-6">
          <img src={img2} className="w-full rounded-xl" />
          <p className="text-xl py-4">
            <span className="text-2xl font-bold">COX'S BAZAR</span> <br />
            You should without a doubt go to Cox's Bazar, which is situated next
            to the seashore along the Bay of Bengal, if you're looking for the
            most well-known tourist destinations in Bangladesh. It features the
            longest uninterrupted sea beach in the world, which is more than 120
            kilometres long.
          </p>
        </div>
        <p className="text-xl py-4">
          Miles of golden beach, surfing waves, tall cliffs, unusual conch
          shells, waterfalls, pagodas, and parks may also be found here. The
          main draw of Cox's Bazar is the enormous Buddhist monastery known as
          Aggmeda Khyang, which houses numerous massive bronze statues of
          Buddha.
        </p>
      </div>
      <div>
        <div className="grid md:lg:grid-cols-2 grid-cols-1 gap-6">
          <p className="text-xl py-4">
            <span className="text-2xl font-bold">SONARGAON</span> <br /> Due to
            its location as a busy river port in the late 1800s, Sonargaon was a
            popular destination for muslin traders. Its numerous galleries and
            historical landmarks make it a popular tourist destination and add
            to its allure. A magnificent museum has been created in the old
            residence of a successful Hindu merchant, the Boro Sardar Bari.
          </p>
          <img src={img3} className="w-full rounded-xl" />
        </div>
        <p className="text-xl py-4">
          grand views of the neighbouring mountain range, and vibrant rows of
          wooden houses. It's not difficult to imagine Sylhet as one of the most
          gorgeous fairytale settings come to life with its serene, tree-lined
          parks and cobblestone walkways.
        </p>
      </div>
      <div>
        <div className="grid md:lg:grid-cols-2 grid-cols-1 gap-6">
        <img src={img4} className="w-full rounded-xl" />
          <p className="text-xl py-4">
            <span className="text-2xl font-bold">ST. MARTIN’S ISLAND</span>{" "}
            <br /> St. Martin's Island is the only coral island in Bangladesh.
            This island is referred to as "Narikel Zinzira" in Bengali, which
            translates to "Coconut Island," because it has an overabundance of
            coconut palms. 9 kilometres to the south of Coxs Bazar is the
            island.
          </p>
          
        </div>
        <p className="text-xl py-4">
          grand views of the neighbouring mountain range, and vibrant rows of
          wooden houses. It's not difficult to imagine Sylhet as one of the most
          gorgeous fairytale settings come to life with its serene, tree-lined
          parks and cobblestone walkways.
        </p>
      </div>

      
    </div>
  );
};

export default TourSection;
