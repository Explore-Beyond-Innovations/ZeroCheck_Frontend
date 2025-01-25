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
import Button from "./Button";

//
const CreateEvent = () => {
   return (
      <div className={`bg-[#ffffff] text-black h-auto min-h-[100vh] py-10 space-y-5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 ${poppins.className}`}>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
            <div className="lg:col-span-5">
               <h3 className="font-[600] text-[1.75rem] text-[#000000] text-center sm:text-left mb-5">Manage Events</h3>
               <div className="bg-[#212121] w-full h-[25.313rem] sm:h-[300px] w-full"></div>
            </div>

            <div className="form lg:col-span-7">
               <form>
                  <div className="mb-1">
                     <input
                        type="text"
                        name="name"
                        id="Event_Name"
                        className="h-[1.8rem] sm:h-[1.8rem] w-full text-[32px] sm:text-[40px] lg:text-[34px] font-[300] outline-none border-none"
                        placeholder="Event Name"
                     />
                  </div>

                  <div className="mb-5">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-5">
                        <div>
                           <label htmlFor="startDate" className="font-semibold text-[12px]">
                              Start Date
                           </label>
                           <input type="date" name="startDate" id="startDate" className="h-[40px] text-[12px] border border-gray-300 w-full rounded-lg px-4 outline-none mt-1" placeholder="Choose date" />
                        </div>
                        <div>
                           <label htmlFor="endDate" className="font-semibold text-[12px]">
                              End Date
                           </label>
                           <input type="date" id="endDate" name="endDate" className="h-[40px] text-[12px] border border-gray-300 w-full rounded-lg px-4 outline-none mt-1" />
                        </div>
                     </div>

                     <div className="flex flex-col sm:flex-row items-start gap-5 border border-gray-300 rounded-lg px-4 py-2">
                        <Image src={location} alt="location-icon" className="w-[12px] h-[14px]" />
                        <div className="flex flex-col gap-1 w-full">
                           <label htmlFor="Location" className="font-semibold text-[12px]">
                              Add Event Location
                           </label>
                           <input type="text" name="Location" id="Location" className="border-none outline-none w-full sm:w-80 text-[12px]" placeholder="Add physical address or virtual link" />
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
                           className="h-[40px] border border-gray-300 w-full rounded-lg px-4 outline-none pl-12 text-[12px]"
                        />
                        <Image src={book} alt="book" className="absolute w-[12px] h-[14px] left-[19px] top-3" />
                     </div>

                     <p className="font-semibold text-[12px] text-[#000000]">Event Settings</p>

                     <div className="border border-gray-300 rounded-lg">
                        <div className="flex items-center justify-between px-5">
                           <Image src={ticket} alt="ticket" className="w-[14px] h-[14px]" />
                           <input type="text" name="Tickets" id="Tickets" placeholder="Tickets" className="flex-1 h-[40px] border-none rounded-lg px-4 outline-none text-[12px]" />
                           <div className="flex gap-2 items-center">
                              <p className="font-semibold text-black text-[12px]">Free</p>
                              <Image src={edit} alt="edit" className="w-[14px] h-[14px]" />
                           </div>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between px-5">
                           <Image src={capacity} alt="capacity" className="w-[10px] h-[12px]" />
                           <input type="text" name="Capacity" id="Capacity" placeholder="Capacity" className="flex-1 h-[40px] border-none rounded-lg px-4 outline-none text-[12px] pl-5" />
                           <div className="flex gap-2 items-center">
                              <p className="font-semibold text-black text-[12px]">Capacity</p>
                              <Image src={edit} alt="edit" className="w-[14px] h-[14px]" />
                           </div>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between px-5">
                           <Image src={tags} alt="tags" className="w-[14px] h-[14px]" />
                           <input type="text" name="Tags" id="Tags" placeholder="Tags" className="flex-1 h-[40px] border-none rounded-lg px-4 outline-none text-[12px]" />
                           <div className="flex gap-2 items-center">
                              <Image src={caret} alt="caret" className="w-[14px]" />
                           </div>
                        </div>
                     </div>

                     <div className="flex justify-center items-center">
                        <Button label="Create event" />

                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>

   );
};

export default CreateEvent;
