import Image from "next/image";
import SideNavigation from "./sideNavOne";
import Card from "./dashboard/Card";
import EventCard from "./EventCard";
import eventImage1 from '@/app/images/eventImage1.png'
import eventImage2 from '@/app/images/eventImage2.png'
import eventImage3 from '@/app/images/eventImage3.png'
import eventImage4 from '@/app/images/eventImage4.png'
import { exploreData } from "./ExploreCategory";
import ExploreCategoryCard from "./ExploreCategoryCard";
import filterIcon from '@/app/images/Filter.png'
import searchIcon from '@/app/images/searchIcon.png'

const eventCards = [
    {
        id: 1,
        title: 'Crypto Conference 2025',
        time: "10:30 AM UTC+1",
        date: "2023-08-15",
        location: "NewYork",
        platform: "Zoom",
        price: "50",
        currency: "WRLD",
        imageUrl: eventImage1
    },
    {
        id: 2,
        title: 'Crypto Conference 2025',
        time: "10:30 AM UTC+1",
        date: "2023-08-15",
        location: "NewYork",
        platform: "Zoom",
        price: "50",
        currency: "WRLD",
        imageUrl: eventImage2
    },
    {
        id: 3,
        title: 'Crypto Conference 2025',
        time: "10:30 AM UTC+1",
        date: "2023-08-15",
        location: "NewYork",
        platform: "Zoom",
        price: "50",
        currency: "WRLD",
        imageUrl: eventImage3
    },
    {
        id: 4,
        title: 'Crypto Conference 2025',
        time: "10:30 AM UTC+1",
        date: "2023-08-15",
        location: "NewYork",
        platform: "Zoom",
        price: "50",
        currency: "WRLD",
        imageUrl: eventImage4
    },
]

const EventsGuest = () => {
    return ( 
        <div className="flex">
            <SideNavigation />
            <section
                className={`bg-[#EDEDED] min-h-screen h-screen overflow-auto overscroll-none py-4 px-8 relative w-full`}
            >
                <header className="flex justify-between items-center w-full mx-auto">
                    <div className="flex gap-3">
                        <div className="relative">
                        <svg
                            className="absolute w-4 h-4 left-6 top-1/2 -translate-y-1/2"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z"
                            stroke="black"
                            strokeOpacity="0.5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search Event"
                            className="rounded-full py-3 pl-16 pr-10 text-sm bg-white"
                        />
                        </div>
                        <button className="px-10 py-3 bg-black text-white rounded-full text-sm font-semibold">
                        Create Event
                        </button>
                    </div>

                    <div className="flex gap-6 items-center">
                        {/* <svg
                        width="26"
                        height="29"
                        viewBox="0 0 26 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                            fill="#343434"
                        />
                        <circle cx="20.5" cy="8" r="4.5" fill="#D43791" />
                        </svg> */}

                        <button className="bg-black px-10 py-3 rounded-full font-bold">
                            Sign In
                        </button>
                        
                        {/* <Card>
                        <div className="flex gap-8 items-center w-[220px]">
                            <Image
                            src="/images/user.png"
                            alt="User"
                            width={40}
                            height={40}
                            />

                            <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-sm text-black">
                                Jane Doe
                                </h4>{" "}
                                <span className="bg-[#219653] rounded-full w-3 h-3"></span>
                            </div>
                            <p className="font-medium text-xs text-black">
                                0x1234...5678
                            </p>
                            </div>
                        </div>
                        </Card> */}
                    </div>
                </header>
                <div className="text-black py-3">
                    <p className="font-semibold py-3">Events</p>
                    <Card>
                        <div className="px-7 py-5 flex flex-col gap-6">
                            <div className="w-[38%] flex flex-col gap-6">
                                <p className="font-semibold text-md">Discover Events</p>
                                <p>
                                    Discover events happening around you, explore by category, or dive
                                    into curated community calendars for exciting options
                                </p>
                            </div>
                            <div className="events">
                                <header className="flex justify-between items-center pb-5">
                                    <div>
                                        <p className="font-semibold">Events</p>
                                    </div>
                                    <div className="flex justify-start gap-4 items-center flex-nowrap">
                                        <div className="rounded-full py-3 px-4 text-sm bg-[#EDEDED] flex justify-start items-center gap-5 w-fit">
                                            <Image src={filterIcon} alt="#"/>
                                            <input
                                                type="text"
                                                placeholder="Filter Event"
                                                className="bg-[#EDEDED] w-[100px]"
                                            />
                                        </div>
                                        <div className="rounded-full py-3 pl-10 pr-16 text-sm bg-[#EDEDED] flex justify-center items-center gap-10">
                                            <Image src={searchIcon} alt="#"/>    
                                            <input
                                                type="text"
                                                placeholder="Search Event"
                                                className="bg-[#EDEDED] w-[100px]"
                                            />
                                        </div>
                                        <p>View All</p>
                                    </div>
                                </header>

                                <div className="flex justify-between items-center">
                                    {
                                        eventCards.map((card) => {
                                            return (
                                                <EventCard
                                                    key={card.id} 
                                                    title={card.title}
                                                    time={card.time}
                                                    date={card.date}
                                                    location={card.location}
                                                    platform={card.platform}
                                                    price={card.price}
                                                    currency={card.currency}
                                                    imageUrl={card.imageUrl.src}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="explore-categories">
                                <p className="font-semibold py-2">Explore Categories</p>
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                                    {exploreData.map((data, index) => {
                                        return (
                                        <ExploreCategoryCard
                                            key={index}
                                            title={data.title}
                                            event_count={data.event_count}
                                            image={data.image}
                                        />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
 
export default EventsGuest;