import { Search, ArrowUpDown } from 'lucide-react';
import Image from 'next/image';
import {Poppins, Inter  } from "next/font/google";
const krona = Poppins({
    weight: "600",
    subsets: ["latin"],
});

const inter = Inter({
    weight: "600",
    subsets: ["latin"],
});


export default function EventsLoggedinPage() {
    return (
        <div className={`bg-custom-gray md:py-[5%] py-[5%] ${krona.className}`}>
            <div className='w-[95%] mx-auto flex items-end md:items-center justify-end md:justify-between flex-col md:flex-row'>
              <div className='flex justify-center gap-5 md:gap-10'>
              <div className='bg-white rounded-full flex py-3 px-5 items-center gap-4 w-'>
                    <Search className='text-searchColor size-4' />
                    <input type='search' placeholder='Search Event' className='bg-transparent text-searchColor text-[12.94px] outline-none w-[100%]' />
                </div>
                <div className={`relative text-white ${inter.className}`}>
                    <Image src='/images/reck.png' alt='' width={180.12} height={35.36} className='h-[35.36px]'/>
                    <p className='absolute font-[700] md:text-[13px]  text-sm top-[40%] left-[48%]  transform -translate-x-1/2 -translate-y-1/2'>Create Event</p>
                </div>
              </div>
<div className='flex justify-center gap-8 items-center '>
<Image src='/images/note.png' alt='' width={23.61} height={80} className=' h-[25.5px]'/>
   <div className='flex items-center gap-4 text-black bg-white py-1 px-4 rounded-lg w-fit'>
   <Image src='/images/avatar.png' alt='' width={33.11} height={50} className=' h-[33.52px]'/>
    <div>
      <h3 className='font-bold text-[13px] flex items-center gap-2'>Jane Deo <div className='bg-green-600 rounded-full h-2 w-2'></div></h3> 
      <p className='text-[9px]'>0x1234...2321</p> 
        </div>        
    </div>         


</div>



            </div>

<div className='md:w-[97%] w-[95%] mx-auto mt-10 bg-white rounded-lg py-12 md:px-6 px-5'>

<h3 className='font-[600] text-[24px] text-black'>Discover Events</h3>
<p className='font-[300] text-black text-[14px] md:w-[40%]'>Discover popular events happening near you, explore by category, or dive into curated community calendars for exciting options.</p>
<div>
    <div className='flex gap-2 md:gap-5 mt-12 md:items-center flex-col md:flex-row md:justify-between'>
<h3 className='font-[600] text-[24px] text-black'>Events</h3>
<div className='flex gap-2 md:gap-5 items-center'>
<div className='bg-custom-gray rounded-full flex h-[36.49px] text-searchColor items-center gap-2 w-[116.89px] px-2'>
                    <ArrowUpDown className=' size-4 ' />
                    <input type='search' placeholder='Search Event' className='bg-transparent text-searchColor text-[9.9px] outline-none w-full' />
                </div>

                <div className='bg-custom-gray rounded-full text-searchColor flex h-[36.49px] items-center gap-2 w-[116.89px] px-2'>
                    <Search   className=' size-4' />
                    <input type='search' placeholder='Search Event' className='bg-transparent text-searchColor text-[9.9px] outline-none w-[100%]' />
                </div>
             <h4 className='text-[16px] font-[400]  text-black'>View All</h4>   

</div>
    </div>
</div>

<div className='grid md:grid-cols-4 gap-6 mt-8 text-black'>
<div className='flex gap-5 bg-custom-gray flex-col justify-center px-5 py-4 pb-14 rounded-lg w-[279px] h-[456px]'>
<Image src='/images/picture.png' alt='' width={231} height={200} className=' h-[195px]'/>
<div className='flex flex-col gap-2'>
    <h3 className='font-[600] text-[14px] '>Crypto Conference 2025</h3>
    <p className='text-[10px] font-[500]'>10:30 AM UTC+1</p>
    <p className='text-[10px] font-[500]'>2023-08-15</p>
    <p className='text-[10px] font-[600] italic'>NewYork | Zoom</p>
    <p className='text-[10px] font-[900]'>50 WRLD</p>
</div>
<div className={`relative text-white ${inter.className}`}>
                    <Image src='/images/reck.png' alt='' width={99.01} height={200} className=' h-[19.67px]'/>
                    <p className='absolute font-[500] text-[7.23px] Inter top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2'>View Event</p>
                </div>
</div>

<div className='flex gap-5 bg-custom-gray flex-col justify-center px-5 pt-4 pb-14 rounded-lg  w-[279px] h-[456px]'>
<Image src='/images/picture1.png' alt='' width={231} height={200} className=' h-[195px]'/>
<div className='flex flex-col gap-2'>
    <h3 className='font-[600] text-[14px] '>Crypto Conference 2025</h3>
    <p className='text-[10px] font-[500]'>10:30 AM UTC+1</p>
    <p className='text-[10px] font-[500]'>2023-08-15</p>
    <p className='text-[10px] font-[600] italic'>NewYork | Zoom</p>
    <p className='text-[10px] font-[900]'>50 WRLD</p>
</div>
<div className={`relative text-white ${inter.className}`}>
                    <Image src='/images/reck.png' alt='' width={99.01} height={200} className=' h-[19.67px]'/>
                    <p className='absolute font-[500] text-[7.23px] Inter top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2'>View Event</p>
                </div>
</div>

<div className='flex gap-5 bg-custom-gray flex-col justify-center px-5 pt-4 pb-14 rounded-lg  w-[279px] h-[456px]'>
<Image src='/images/picture2.png' alt=''width={231} height={200} className=' h-[195px]'/>
<div className='flex flex-col gap-2'>
    <h3 className='font-[600] text-[14px] '>Crypto Conference 2025</h3>
    <p className='text-[10px] font-[500]'>10:30 AM UTC+1</p>
    <p className='text-[10px] font-[500]'>2023-08-15</p>
    <p className='text-[10px] font-[600] italic'>NewYork | Zoom</p>
    <p className='text-[10px] font-[900]'>50 WRLD</p>
</div>
<div className={`relative text-white ${inter.className}`}>
                    <Image src='/images/reck.png' alt='' width={99.01} height={200} className=' h-[19.67px]'/>
                    <p className='absolute font-[500] text-[7.23px] Inter top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2'>View Event</p>
                </div>
</div>
<div className='flex gap-5 bg-custom-gray flex-col justify-center px-5 pt-4 rounded-lg pb-14  w-[279px] h-[456px]'>
<Image src='/images/picture3.png' alt='' width={231} height={200} className=' h-[195px]'/>
<div className='flex flex-col gap-2'>
    <h3 className='font-[600] text-[14px] '>Crypto Conference 2025</h3>
    <p className='text-[10px] font-[500]'>10:30 AM UTC+1</p>
    <p className='text-[10px] font-[500]'>2023-08-15</p>
    <p className='text-[10px] font-[600] italic'>NewYork | Zoom</p>
    <p className='text-[10px] font-[900]'>50 WRLD</p>
</div>
<div className={`relative text-white ${inter.className}`}>
                    <Image src='/images/reck.png' alt='' width={99.01} height={200} className=' h-[19.67px]'/>
                    <p className='absolute font-[500] text-[7.23px] Inter top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2'>View Event</p>
                </div>
</div>
</div>


<div className='mt-12 text-black'>
<h3 className=' font-[600] text-[24px]'>Explore Categories</h3>
<div className='grid md:grid-cols-4 gap-6 ml-[-0.6%] mt-5 w-[100%] mx-auto' >
<div className='flex bg-custom-gray justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Art & Culture</h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img.png' alt='' width={81.4} height={81} className=' h-[81.4px]'/>

</div>
<div className='flex  bg-custom-gray  justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Trading</h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img2.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>

<div className='flex  bg-custom-gray  justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Fashion & Design </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img3.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>

<div className='flex  bg-custom-gray  justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Music </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img4.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>

<div className='flex  bg-custom-gray  justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Blockchain </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img5.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>

<div className='flex  bg-custom-gray  justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Goverment </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img6.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>
<div className='flex  bg-custom-gray justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Investment </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img7.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>
<div className='flex  bg-custom-gray  justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Community </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img8.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>
<div className='flex  bg-custom-gray  justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>School & Education </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img9.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>

<div className='flex  bg-custom-gray  justify-between px-5 items-center w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Banking & Finance </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img10.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>

<div className='flex  bg-custom-gray  justify-between px-5 items-center w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Fitness & Sports </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img11.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>
<div className='flex  bg-custom-gray  justify-between px-5 items-center  w-[293.7px] h-[165px]  rounded-[4.4px]'>
<div className='flex flex-col gap-1 justify-center '>
    <h3 className='font-[600] text-[17.6px]'>Tech & Science </h3>
    <p className='text-[14.3px] font-[400] text-categoryColor'>200 Events</p>
    </div>
    <Image src='/loggedimg/img12.png' alt='' width={81.4} height={81.4} className=' h-[81.4px]'/>

</div>


</div>


</div>

</div>



</div>



        
    );
}