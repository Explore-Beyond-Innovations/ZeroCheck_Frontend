import React from 'react';

interface Event {
  name: string;
  startDate: string;
  endDate: string;
  participants: 700;
  status: string;
}
const EventManagement = ({ events }: { events: Event[] }) => {
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-[3rem]">
      <h2 className="text-xl font-semibold mb-4">Event Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 font-medium text-[#00000080]">Event Name</th>
              <th className="text-left py-3 px-4 font-medium text-[#00000080]">StartDate</th>
              <th className="text-left py-3 px-4 font-medium text-[#00000080]">EndDate</th>
              <th className="text-left py-3 px-4 font-medium text-[#00000080]">Participants</th>
              <th className="text-left py-3 px-4 font-medium text-[#00000080]">Status</th>
              <th className="text-left py-3 px-4 font-medium text-[#00000080]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr
                key={index}
                className=" hover:bg-gray-50"
              >
                <td className="py-3 px-4">{event.name}</td>
                <td className="py-3 px-4">{event.startDate}</td>
                <td className="py-3 px-4">{event.endDate}</td>
                <td className="py-3 px-4">{event.participants}</td>
                <td className={`py-3 px-4 font-medium text-black`}>
                  {event.status}
                </td>
                <td className="py-3 px-4">
                  <button className="text-black">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventManagement;