import React, { useRef } from "react";
import Image from "next/image";
import location from "../../public/images/Group.png";
import book from "../../public/images/book.png";
import ticket from "../../public/icons/ticket.png"
import tags from "../../public/icons/tags.png";
import capacity from "../../public/icons/capacity.png";
import edit from "../../public/icons/edit.png";
import caret from "../../public/icons/caret.png";
import { Poppins } from "next/font/google";
import { poppins } from "../layout";

//
const CreateEvent = () => {
   return (
      <div className={`bg-[#ffffff] text-black h-auto min-h-[100vh] py-10 space-y-5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 ${poppins.className}`}>
         <h3 className="font-[600] text-[24px] text-[#000000] text-center sm:text-left">Manage Events</h3>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
               <div className="bg-[#212121] h-[250px] sm:h-[300px] lg:h-full w-full rounded-[8px]"></div>
            </div>

            <div className="form lg:col-span-7">
               <form>
                  <div className="mb-5">
                     <input
                        type="text"
                        name="name"
                        id="Event_Name"
                        className="h-[3.3rem] sm:h-[6.5rem] w-full text-[32px] sm:text-[50px] lg:text-[64px] font-[300] outline-none border-none"
                        placeholder="Event Name"
                     />
                  </div>

                  <div className="mb-5">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-5">
                        <div>
                           <label htmlFor="startDate" className="font-semibold text-[14px]">
                              Start Date
                           </label>
                           <input type="date" name="startDate" id="startDate" className="h-[50px] border border-gray-300 w-full rounded-lg px-4 outline-none mt-1" placeholder="Choose date" />
                        </div>
                        <div>
                           <label htmlFor="endDate" className="font-semibold text-[14px]">
                              End Date
                           </label>
                           <input type="date" id="endDate" name="endDate" className="h-[50px] border border-gray-300 w-full rounded-lg px-4 outline-none mt-1" />
                        </div>
                     </div>

                     <div className="flex flex-col sm:flex-row items-start gap-5 border border-gray-300 rounded-lg p-4">
                        <Image src={location} alt="location-icon" className="w-[16px] h-[20px]" />
                        <div className="flex flex-col gap-1 w-full">
                           <label htmlFor="Location" className="font-semibold text-[14px]">
                              Add Event Location
                           </label>
                           <input type="text" name="Location" id="Location" className="border-none outline-none w-full sm:w-80 text-[14px]" placeholder="Add physical address or virtual link" />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="relative">
                        <input
                           type="text"
                           name="Description"
                           id="Description"
                           placeholder="Add Description"
                           className="h-[50px] border border-gray-300 w-full rounded-lg px-4 outline-none pl-14"
                        />
                        <Image src={book} alt="book" className="absolute left-[19px] top-3" />
                     </div>

                     <p className="font-semibold text-[14px] text-[#000000]">Event Settings</p>

                     <div className="border border-gray-300 rounded-lg">
                        <div className="flex items-center justify-between px-5 py-2">
                           <Image src={ticket} alt="ticket" className="w-[18px] h-[18px]" />
                           <input type="text" name="Tickets" id="Tickets" placeholder="Tickets" className="flex-1 h-[50px] border-none rounded-lg px-4 outline-none" />
                           <div className="flex gap-2 items-center">
                              <p className="font-semibold text-black">Free</p>
                              <Image src={edit} alt="edit" className="w-[18px] h-[18px]" />
                           </div>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between px-5 py-2">
                           <Image src={capacity} alt="capacity" className="w-[18px] h-[18px]" />
                           <input type="text" name="Capacity" id="Capacity" placeholder="Capacity" className="flex-1 h-[50px] border-none rounded-lg px-4 outline-none" />
                           <div className="flex gap-2 items-center">
                              <p className="font-semibold text-black">Capacity</p>
                              <Image src={edit} alt="edit" className="w-[18px] h-[18px]" />
                           </div>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between px-5 py-2">
                           <Image src={tags} alt="tags" className="w-[18px] h-[18px]" />
                           <input type="text" name="Tags" id="Tags" placeholder="Tags" className="flex-1 h-[50px] border-none rounded-lg px-4 outline-none" />
                           <div className="flex gap-2 items-center">
                              <Image src={caret} alt="caret" className="w-[14px]" />
                           </div>
                        </div>
                     </div>

                     <div className="flex justify-center items-center">
                        <button className="relative bg-[#212121] text-white font-semibold px-6 py-2 uppercase tracking-wide shadow-lg transform skew-x-[-15deg] hover:bg-gray-800 transition-all duration-300">
                           <span className="skew-x-[15deg]">Create Event</span>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>

   );
};

export default CreateEvent;
