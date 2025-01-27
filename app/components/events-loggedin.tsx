import { Search, ArrowUpDown } from 'lucide-react';
import Image from 'next/image';
import {Poppins  } from "next/font/google";
const krona = Poppins({
    weight: "600",
    subsets: ["latin"],
});
export default function EventsLoggedinPage() {
    return (
        <div className={`bg-custom-gray md:py-[5%] py-[5%] ${krona.className}`}>
            <div className='w-[90%] mx-auto flex items-end md:items-center justify-end md:justify-between flex-col md:flex-row'>
              <div className='flex justify-center gap-5 md:gap-10'>
              <div className='bg-white rounded-full flex py-3 px-5 items-center gap-4 w-fit'>
                    <Search className='text-gray-400 size-5' />
                    <input type='search' placeholder='Search Event' className='bg-transparent outline-none w-[100%]' />
                </div>
                <div className='relative text-white'>
                    <Image src='/images/reck.png' alt='' width={100} height={200} className='md:w-[250px] h-[50px] w-[280px]'/>
                    <h4 className='absolute font-[700] md:text-lg  text-sm top-1/2 md:left-1/2 left-16 transform -translate-x-1/2 -translate-y-1/2'>Create Event</h4>
                </div>
              </div>
<div className='flex justify-center gap-8 items-center '>
<Image src='/loggedimg/note.png' alt='' width={80} height={80} className='w-[30px] h-[30px]'/>
   <div className='flex items-center gap-4 bg-white py-1 px-4 rounded-lg w-fit'>
   <Image src='/images/avatar.png' alt='' width={50} height={50} className='w-[50px] h-[50px]'/>
    <div>
      <h3 className='font-bold text-lg flex items-center gap-2'>Jane Deo <div className='bg-green-600 rounded-full h-2 w-2'></div></h3> 
      <p className='text-sm'>0x1234...2321</p> 
        </div>        
    </div>         


</div>



            </div>

<div className='md:w-[90%] w-[95%] mx-auto mt-10 bg-white rounded-lg py-12 md:px-14 px-5'>

<h3 className='font-bold text-2xl'>Discover Events</h3>
<p className='font-light text-gray-600 text-sm md:w-[40%]'>Discover popular events happening near you, explore by category, or dive into curated community calendars for exciting options.</p>
<div>
    <div className='flex gap-2 md:gap-5 mt-12 md:items-center flex-col md:flex-row md:justify-between'>
<h3 className='font-bold text-lg'>Events</h3>
<div className='flex gap-2 md:gap-5 items-center'>
<div className='bg-custom-gray rounded-full flex py-3 px-5 items-center gap-4 w-fit'>
                    <ArrowUpDown className='text-gray-400 size-5' />
                    <input type='search' placeholder='Search Event' className='bg-transparent outline-none w-[100%]' />
                </div>

                <div className='bg-custom-gray rounded-full flex py-3 px-5 items-center gap-4 w-fit'>
                    <Search   className='text-gray-400 size-5' />
                    <input type='search' placeholder='Search Event' className='bg-transparent outline-none w-[100%]' />
                </div>
             <h4 className='text-md '>View All</h4>   

</div>
    </div>
</div>

<div className='grid md:grid-cols-4 gap-5 mt-5'>
<div className='flex gap-5 bg-custom-gray flex-col justify-center px-5 py-4 pb-14 rounded-lg'>
<Image src='/images/event-1.png' alt='' width={100} height={200} className='w-[100%] h-auto'/>
<div className='flex flex-col gap-2'>
    <h3 className='font-bold text-lg'>Crypto Conference 2025</h3>
    <p className='text-md'>10:30 AM UTC+1</p>
    <p className='text-sm'>2023-08-15</p>
    <p className='text-sm font-semibold'>NewYork | Zoom</p>
    <p className='text-sm font-bold'>50 WRLD</p>
</div>
<div className='relative text-white'>
                    <Image src='/images/reck.png' alt='' width={100} height={200} className='w-[200px] h-[50px]'/>
                    <h4 className='absolute font-[700] text-sm  top-1/2 left-24 transform -translate-x-1/2 -translate-y-1/2'>View Event</h4>
                </div>
</div>  

<div className='flex gap-5 bg-custom-gray flex-col justify-center px-5 pt-4 pb-14 rounded-lg'>
<Image src='/images/event-2.png' alt='' width={100} height={200} className='w-[100%] h-auto'/>
<div className='flex flex-col gap-2'>
    <h3 className='font-bold text-lg'>Crypto Conference 2025</h3>
    <p className='text-md'>10:30 AM UTC+1</p>
    <p className='text-sm'>2023-08-15</p>
    <p className='text-sm font-semibold'>NewYork | Zoom</p>
    <p className='text-sm font-bold'>50 WRLD</p>
</div>
<div className='relative text-white'>
                    <Image src='/images/reck.png' alt='' width={100} height={200} className='w-[200px] h-[50px]'/>
                    <h4 className='absolute font-[700] text-sm  top-1/2 left-24 transform -translate-x-1/2 -translate-y-1/2'>View Event</h4>
                </div>
</div>

<div className='flex gap-5 bg-custom-gray flex-col justify-center px-5 pt-4 pb-14 rounded-lg'>
<Image src='/images/event-3.png' alt='' width={100} height={200} className='w-[100%] h-auto'/>
<div className='flex flex-col gap-2'>
    <h3 className='font-bold text-lg'>Crypto Conference 2025</h3>
    <p className='text-md'>10:30 AM UTC+1</p>
    <p className='text-sm'>2023-08-15</p>
    <p className='text-sm font-semibold'>NewYork | Zoom</p>
    <p className='text-sm font-bold'>50 WRLD</p>
</div>
<div className='relative text-white'>
                    <Image src='/images/reck.png' alt='' width={100} height={200} className='w-[200px] h-[50px]'/>
                    <h4 className='absolute font-[700] text-sm  top-1/2 left-24 transform -translate-x-1/2 -translate-y-1/2'>View Event</h4>
                </div>
</div>
<div className='flex gap-5 bg-custom-gray flex-col justify-center px-5 pt-4 rounded-lg pb-14'>
<Image src='/images/event-4.png' alt='' width={100} height={200} className='w-[100%] h-auto'/>
<div className='flex flex-col gap-2'>
    <h3 className='font-bold text-lg'>Crypto Conference 2025</h3>
    <p className='text-md'>10:30 AM UTC+1</p>
    <p className='text-sm'>2023-08-15</p>
    <p className='text-sm font-semibold'>NewYork | Zoom</p>
    <p className='text-sm font-bold'>50 WRLD</p>
</div>
<div className='relative text-white'>
                    <Image src='/images/reck.png' alt='' width={100} height={200} className='w-[200px] h-[50px]'/>
                    <h4 className='absolute font-[700] text-sm  top-1/2 left-24 transform -translate-x-1/2 -translate-y-1/2'>View Event</h4>
                </div>
</div>
</div>


<div className='mt-12'>
<h3 className=' font-bold text-2xl'>Explore Categories</h3>
<div className='grid md:grid-cols-4 gap-5 mt-5'>
<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Art & Culture</h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/img.png' alt='' width={81} height={81} className=' h-auto'/>

</div>
<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Trading</h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/img1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>

<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Fashion & Design </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/spanish-woman_5866183 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>

<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Music </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/music_2753286 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>

<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Blockchain </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/bitcoin_1876985 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>

<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Goverment </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/leader_1470875 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>
<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Investment </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/revenue_2654565 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>
<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Community </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/group_4632621 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>
<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>School & Education </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/book_6551068 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>

<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Banking & Finance </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/law_3206857 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>

<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Fitness & Sports </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/exercise_2860928 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>
<div className='flex gap-5 bg-custom-gray  justify-between px-5 py-8  rounded-lg'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-bold text-lg'>Tech & Science </h3>
    <p className='text-sm text-gray-400'>200 Events</p>
    </div>
    <Image src='/images/technology_3715280 1.png' alt='' width={81} height={81} className=' h-auto'/>

</div>


</div>


</div>

</div>



</div>



        
    );
}
