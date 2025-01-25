import EventItem from "./EventItem";

const events = [
  {
    id: 1,
    event: "Blockchain Summit 2025",
    date: "2023-08-15",
    location: "California. lorem ipsum",
    status: "Attended",
  },
  {
    id: 2,
    event: "Blockchain Summit 2025",
    date: "2023-08-15",
    location: "California. lorem ipsum",
    status: "Attended",
  },
  {
    id: 3,
    event: "Blockchain Summit 2025",
    date: "2023-08-15",
    location: "California. lorem ipsum",
    status: "Hosted",
  },
  {
    id: 4,
    event: "Blockchain Summit 2025",
    date: "2023-08-15",
    location: "California. lorem ipsum",
    status: "Attended",
  },
  {
    id: 5,
    event: "Blockchain Summit 2025",
    date: "2023-08-15",
    location: "California. lorem ipsum",
    status: "Attended",
  },
  {
    id: 6,
    event: "Blockchain Summit 2025",
    date: "2023-08-15",
    location: "California. lorem ipsum",
    status: "Attended",
  },
];

export default function Events() {
  return (
    <div className="mt-10">
      <p className="space-x-5">
        <span className="font-bold text-lg">Events Participated</span>
        <span>Credentials</span>
      </p>
      <div className="bg-white p-5 rounded-lg space-y-5 mt-2">
        {events.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}
