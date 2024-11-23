const TourPlan = () => {
    return (
      <div className="h-full text-gray-800 bg-gray-50 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-[#BB8506]">Our Tour Plan</h1>
          <p className="text-lg font-medium text-gray-600 mt-2">
            Experience an unforgettable journey through iconic destinations.
          </p>
        </div>
  
        {/* Tour Overview Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tour Overview</h2>
          <p><strong>Tour Name:</strong> Majestic European Adventure</p>
          <p><strong>Tour Type:</strong> Cultural and Historical Exploration</p>
          <p><strong>Duration:</strong> 14 days / 13 nights</p>
          <p><strong>Destinations:</strong> London, Paris, Amsterdam, Berlin, Prague, Vienna, Budapest</p>
        </div>
  
        {/* Itinerary Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#BB8506]">Day 1: Arrival in London</h3>
            <ul className="mt-3 text-gray-700">
              <li><strong>Activities:</strong> Airport transfer, check-in at hotel, welcome dinner</li>
              <li><strong>Highlights:</strong> Panoramic city tour</li>
            </ul>
          </div>
  
          {/* Day 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#BB8506]">Day 2: London</h3>
            <ul className="mt-3 text-gray-700">
              <li><strong>Activities:</strong> Guided city tour</li>
              <li><strong>Highlights:</strong> Buckingham Palace, Tower of London, London Eye</li>
              <li><strong>Meals:</strong> Breakfast, Lunch</li>
            </ul>
          </div>
  
          {/* Day 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#BB8506]">Day 3: London to Paris</h3>
            <ul className="mt-3 text-gray-700">
              <li><strong>Activities:</strong> Eurostar train to Paris, evening Seine River cruise</li>
              <li><strong>Highlights:</strong> Eiffel Tower, Louvre Museum</li>
              <li><strong>Meals:</strong> Breakfast, Dinner</li>
            </ul>
          </div>
  
          {/* Day 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#BB8506]">Day 4: Paris</h3>
            <ul className="mt-3 text-gray-700">
              <li><strong>Activities:</strong> Full-day city tour</li>
              <li><strong>Highlights:</strong> Notre Dame Cathedral, Montmartre</li>
              <li><strong>Meals:</strong> Breakfast, Lunch</li>
            </ul>
          </div>
  
          {/* Day 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#BB8506]">Day 5: Paris to Amsterdam</h3>
            <ul className="mt-3 text-gray-700">
              <li><strong>Activities:</strong> Train to Amsterdam, evening canal cruise</li>
              <li><strong>Highlights:</strong> Anne Frank House, Van Gogh Museum</li>
              <li><strong>Meals:</strong> Breakfast, Dinner</li>
            </ul>
          </div>
  
          {/* Additional Days */}
          <div className="col-span-1 md:col-span-2 text-center">
            <p className="text-lg font-medium text-gray-600">
              ... and many more exciting destinations await you!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TourPlan;
  