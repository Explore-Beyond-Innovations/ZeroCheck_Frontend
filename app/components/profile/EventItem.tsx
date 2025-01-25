interface EventItemProps {
  event: string;
  date: string;
  location: string;
  status: string;
}

export default function EventItem({
  event,
  date,
  location,
  status,
}: EventItemProps) {
  return (
    <div className="flex justify-between items-center text-sm px-4 2xl:px-8">
      <div>
        <p>{event}</p>
        <p>{date}</p>
      </div>
      <p>{location}</p>
      <p>{status}</p>
    </div>
  );
}
