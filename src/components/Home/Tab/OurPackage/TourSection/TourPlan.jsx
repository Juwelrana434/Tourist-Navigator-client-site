
// import img4 from "../../../../../assets/images/adventure.jpg";

const TourPlan = () => {
    return (
        <div className="h-full text-center text-[rgb(12,12,12)]">
            
<div className=""><h1 className="text-4xl text-center font-bold"> 1. Our Tour Plan</h1>
<div><h1 className="text-2xl font-semibold my-4"> Tour Over View</h1>
           
           <p><strong>Tour Name</strong>: Majestic European Adventure</p>
           <p><strong>Tour Type</strong>: Cultural and Historical Exploration</p>
           <p><strong>Duration</strong>: 14 days / 13 nights</p>
           <p><strong>Destinations</strong>: London, Paris, Amsterdam, Berlin, Prague, Vienna, Budapest</p></div>

    <h1 className="text-xl font-bold">Itinerary</h1>

    <div><h3>Day 1: Arrival in London</h3>
    <ul>
        <li><strong>Activities</strong>: Airport transfer, check-in at hotel, welcome dinner</li>
        <li><strong>Highlights</strong>: Panoramic city tour</li>
    </ul>
</div>
    <div><h3>Day 2: London</h3>
    <ul>
        <li><strong>Activities</strong>: Guided city tour</li>
        <li><strong>Highlights</strong>: Buckingham Palace, Tower of London, London Eye</li>
        <li><strong>Meals</strong>: Breakfast, Lunch</li>
    </ul></div>

    <div><h3>Day 3: London to Paris</h3>
    <ul>
        <li><strong>Activities</strong>: Eurostar train to Paris, evening Seine River cruise</li>
        <li><strong>Highlights</strong>: Eiffel Tower, Louvre Museum</li>
        <li><strong>Meals</strong>: Breakfast, Dinner</li>
    </ul></div>

    <div><h3>Day 4: Paris</h3>
    <ul>
        <li><strong>Activities</strong>: Full-day city tour</li>
        <li><strong>Highlights</strong>: Notre Dame Cathedral, Montmartre</li>
        <li><strong>Meals</strong>: Breakfast, Lunch</li>
    </ul></div>

    <div><h3>Day 5: Paris to Amsterdam</h3>
    <ul>
        <li><strong>Activities</strong>: Train to Amsterdam, evening canal cruise</li>
        <li><strong>Highlights</strong>: Anne Frank House, Van Gogh Museum</li>
        <li><strong>Meals</strong>: Breakfast, Dinner</li>
        <h1>... [continue with similar details for remaining days]</h1>
    </ul></div></div>
           </div>
           
        
    );
};

export default TourPlan;

// style={{backgroundImage : `url(${img4})`, backgroundRepeat :"no-repeat", objectFit:'cover', width: '600px', height:'300px', backgroundAttachment:"fixed" }} 