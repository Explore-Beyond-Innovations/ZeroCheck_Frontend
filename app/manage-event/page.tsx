import React from 'react'
import EventForm from '../components/manage-event-components/EventForm'
import AnalyticsTab from '../components/manage-event-components/AnalyticsTab'
import EventManagement from '../components/manage-event-components/EventManagement'

interface Event {
    name: string;
    startDate: string;
    endDate: string;
    participants: 700;
    status: string;
  };
  const events: Event[] = [
    {
      name: 'Blockchain Hackathon 2024 Token24',
      startDate: '2024-06-15',
      endDate: '2024-09-15',
      participants: 700,
      status: 'Upcoming',
    },
    {
      name: 'Blockchain Hackathon 2024 Token 200',
      startDate: '2024-06-15',
      endDate: '2024-09-15',
      participants: 700,
      status: 'Ended',
    },
    {
      name: 'Blockchain Hackathon 2024 Token 2000',
      startDate: '2024-06-15',
      endDate: '2024-09-15',
      participants: 700,
      status: 'Ongoing',
    },
    {
      name: 'Blockchain Hackathon 2024',
      startDate: '2024-06-15',
      endDate: '2024-09-15',
      participants: 700,
      status: 'Upcoming',
    },
    {
      name: 'Blockchain Hackathon 2024',
      startDate: '2024-06-15',
      endDate: '2024-09-15',
      participants: 700,
      status: 'Upcoming',
    },
    {
      name: 'Blockchain Hackathon 2024',
      startDate: '2024-06-15',
      endDate: '2024-09-15',
      participants: 700,
      status: 'Upcoming',
    },
  ];
export default function page() {
  return (
    <div className='w-full text-black min-h-screen bg-[#EDEDED] p-[3.2rem]'>
        <EventForm />
       
       <AnalyticsTab/>

       <EventManagement events={events} />
      
    </div>
  )
}
