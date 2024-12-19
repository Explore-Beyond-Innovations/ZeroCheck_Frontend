import EventCard from "../EventCard";
import Card from "./Card";

const UpcomingEvents = () => {
  const EVENTS = [
    {
      title: "Crypto Conference 2025",
      time: "10:30 AM UTC+1",
      date: "2025-08-15",
      location: "NewYork",
      platform: "Zoom",
      price: "50",
      currency: "WRLD",
      imageUrl: "/images/event-1.png",
    },
    {
      title: "Crypto Conference 2025",
      time: "10:30 AM UTC+1",
      date: "2025-08-15",
      location: "NewYork",
      platform: "Zoom",
      price: "50",
      currency: "WRLD",
      imageUrl: "/images/event-2.png",
    },
    {
      title: "Crypto Conference 2025",
      time: "10:30 AM UTC+1",
      date: "2025-08-15",
      location: "NewYork",
      platform: "Zoom",
      price: "50",
      currency: "WRLD",
      imageUrl: "/images/event-3.png",
    },
    {
      title: "Crypto Conference 2025",
      time: "10:30 AM UTC+1",
      date: "2025-08-15",
      location: "NewYork",
      platform: "Zoom",
      price: "50",
      currency: "WRLD",
      imageUrl: "/images/event-4.png",
    },
  ];
  return (
    <Card>
      <div className="px-2">
        <div className="py-4 px-6">
          <h2 className="font-semibold text-xl text-black">Upcoming Events</h2>
        </div>
        <div className="flex justify-between flex-wrap">
          {EVENTS.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              time={event.time}
              date={event.date}
              location={event.location}
              platform={event.platform}
              price={event.price}
              currency={event.currency}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default UpcomingEvents;