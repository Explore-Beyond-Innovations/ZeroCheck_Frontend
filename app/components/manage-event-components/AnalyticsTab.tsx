import React from 'react'
import AnalyticsCard from './AnalyticsCard';
import LineChart from './LineChart';

interface Analytic {
    image: string
    title: string;
    value: string;
    change: number;
}

const analytics : Analytic[] = [{
    image: "/icons/revenue.svg",
    title: "Revenue Generated",
    value: "5,000 WRLD",
    change: 20,
}, {
    image: "/icons/participants.svg",
    title: "Total Participants",
    value: "500000",
    change: 2000,
}, {
    image: "/icons/eventhosted.svg",
    title: "Event Hosted",
    value: "200",
    change: 2,
}]
function AnalyticsTab() {
  return (
    <div className="bg-white p-6 mt-[3rem] pb-[10rem] rounded-lg shadow-md">
        <p className='font-semibold text-2xl text-black'>Analytics Dashboard</p>
        <div className='w-full flex gap-x-8 mt-4'>
            {analytics.map((analytic, index) => (
                <AnalyticsCard key={index} image={analytic.image} title={analytic.title} value={analytic.value} change={analytic.change} />
            ))}
        </div>

        <p className='font-semibold text-2xl text-black mt-[5rem]'>Event Performance</p>

        <div className='w-[80%] h-[15.34rem] mx-auto mt-[4rem]'>
            <LineChart />
        </div>

        
    </div>
  )
}

export default AnalyticsTab