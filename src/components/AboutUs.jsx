
import juwel from '../assets/images/image.png'
import im1 from '../assets/images/programmer02.webp'
import im2 from '../assets/images/programmer03.webp'
const AboutUs = () => {
  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          About Us
        </h2>

        {/* Mission Statement */}
        <p className="text-lg text-gray-700 mb-8">
          At Tourist Navigator, our mission is to provide exceptional
          services that help you discover and experience the world's best
          tourist destinations. We strive to create unforgettable journeys for
          every traveler, combining convenience, authenticity, and cultural
          exploration.
        </p>

        {/* Values Section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Integrity</h3>
            <p className="text-gray-600">
              We operate with honesty, transparency, and fairness, ensuring
              that our clients always receive the highest quality service.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Customer First</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We tailor
              every experience to meet the unique needs and preferences of each
              traveler.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We embrace innovation to offer the latest technology and services,
              ensuring a smooth and modern travel experience.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-8">
            Meet Our Team
          </h3>
          <div className="flex justify-center gap-8">
  <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-600">
    <img
      src={juwel}
      alt="Team Member"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-600">
    <img
      src={im1}
      alt="Team Member"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-600">
    <img
      src={im2}
      alt="Team Member"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>

        {/* Footer */}
        <div className="mt-16">
          <h4 className="text-xl text-gray-700 mb-4">Ready to Explore?</h4>
          <p className="text-lg text-gray-600">
            Join us today to start your adventure with Tourist Navigator!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
