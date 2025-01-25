"use client";
import { Calendar, MapPin, FileText, CircleXIcon, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [ticketCost, setTicketCost] = useState<string>('Free');
  const [capacity, setCapacity] = useState<string>('Unlimited');
  const [isEditingTicketCost, setIsEditingTicketCost] = useState<boolean>(false);
  const [isEditingCapacity, setIsEditingCapacity] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string>('');



  const handleTicketCostBlur = () => {
    setIsEditingTicketCost(false);
  };

  const handleCapacityBlur = () => {
    setIsEditingCapacity(false);
  };


  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="h-[28rem] w-[32.3rem] bg-black rounded-md flex items-center justify-center relative overflow-hidden group">
          {image ? (
            <img
              src={image}
              alt="Uploaded Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="absolute text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to upload an image
            </span>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Event Name"
            className="w-full border-transparent focus:border-transparent font-light text-4xl rounded-md p-2 mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col relative gap-2">
              <Calendar
                size={20}
                className="absolute bottom-[0.7rem] left-1 z-50"
                color="#AAAAAA"
              />

              <CircleXIcon
                size={20}
                className="absolute bottom-[0.7rem] right-1 cursor-pointer z-50"
                color="#AAAAAA"
                onClick={() => setStartDate(null)} 
              />

             
              <label htmlFor="startDate" className="text-sm font-semibold">
                Start Date
              </label>

              
              <DatePicker
                id="startDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)} 
                placeholderText="Choose Date"
                className="border rounded-md p-2 pl-8 w-full"
                onFocus={(e) => e.target.blur()} 
              />
            </div>
            <div className="flex flex-col relative gap-2">
            <Calendar
                size={20}
                className="absolute bottom-[0.7rem] left-1 z-50"
                color="#AAAAAA"
              />

              <CircleXIcon
                size={20}
                className="absolute bottom-[0.7rem] right-1 cursor-pointer z-50"
                color="#AAAAAA"
                onClick={() => setStartDate(null)} 
              />

            <label htmlFor="endDate" className="text-sm font-semibold">
                End Date
              </label>
              <DatePicker
                id="endDate"
                selected={endDate}
                onChange={(date) => setEndDate(date)} 
                placeholderText="Choose Date"
                className="border rounded-md p-2 pl-8 w-full"
                onFocus={(e) => e.target.blur()} 
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 border rounded-md relative p-4 pl-8">
            <MapPin size={20} color="#AAAAAA" className="absolute top-2 left-2" />
            <div className="flex flex-col gap-y-1 w-full">
                <p  className="text-sm font-semibold p-0 m-0 pl-2"> Add Event Location</p>

            <input
              type="text"
              placeholder="Add physical address or virtual link"
              className="w-full border-transparent rounded-md pl-2"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              />
              </div>
          </div>
          <div className="flex items-center gap-2 border rounded-md mt-4 pl-4">
            <FileText size={20} color="#AAAAAA" />
            <textarea
              placeholder="Add Description"
              className="w-full h-[3rem] overflow-y-scroll border-transparent rounded-md p-2 pt-[0.8rem]"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className="grid grid-cols-1 border p-4 rounded-md gap-4 mt-4">
          <p  className="text-sm font-semibold p-0 m-0 pl-2"> Event Settings</p>
          <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-x-6">
                <Image src="/icons/ticket.svg" alt="ticket" width={20} height={20} quality={80} />
                <p className="text-sm font-semibold text-[#00000080]">Ticket Cost</p>
              </div>
              <div className="flex items-center gap-x-2">
                {isEditingTicketCost ? (
                  <input
                    type="text"
                    value={ticketCost}
                    onChange={(e) => setTicketCost(e.target.value)}
                    onBlur={handleTicketCostBlur}
                    className="border rounded-md p-1"
                  />
                ) : (
                  <>
                    <p className="text-black font-semibold">{ticketCost}</p>
                    <Image
                      src="/icons/edit.svg"
                      alt="update"
                      width={20}
                      height={20}
                      quality={80}
                      className="cursor-pointer"
                      onClick={() => setIsEditingTicketCost(true)}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="w-[100%] h-[0.5px] bg-[#e5e7eb] mx-auto"/>
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-x-6">
                <Image src="/icons/capacity.svg" alt="capacity" width={20} height={20} quality={80} />
                <p className="text-sm font-semibold text-[#00000080]">Capacity</p>
              </div>
              <div className="flex items-center gap-x-2">
                {isEditingCapacity ? (
                  <input
                    type="text"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    onBlur={handleCapacityBlur}
                    className="border rounded-md p-1"
                  />
                ) : (
                  <>
                    <p className="text-black font-semibold">{capacity}</p>
                    <Image
                      src="/icons/edit.svg"
                      alt="update"
                      width={20}
                      height={20}
                      quality={80}
                      className="cursor-pointer"
                      onClick={() => setIsEditingCapacity(true)}
                    />
                  </>
                )}
              </div>
            </div>

            <div className="w-[100%] h-[0.5px] bg-[#e5e7eb] mx-auto"/>
            <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-x-6">
                    <Image src="/icons/addtags.svg" alt="add tags" width={20} height={20} quality={80} />
                    <p className="text-sm font-semibold text-[#00000080]">Add Tags</p>
                </div>
            
               {isDropdownOpen ? (<ChevronUp size={20} color="#000000" className="cursor-pointer transition-all duration-300" onClick={toggleDropdown} />) : (<ChevronDown size={20} color="#000000" className="cursor-pointer transition-all duration-300" onClick={toggleDropdown} />)}
               
            </div>
          </div>
          {/*Test drop down */}
          {isDropdownOpen && (<div className="mt-2 bg-gray-100 p-4 rounded-md flex gap-2 transition-all duration-300" >
              {['#Tech', '#Blockchain', '#AI/ML'].map((tag) => (
                <div
                  key={tag}
                  className={`p-2 rounded-md cursor-pointer transition-all duration-300 ${
                    selectedTags.includes(tag) ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </div>
              ))}
          </div>)}
       
          <button className="w-full bg-black text-white rounded-md p-2 mt-4">
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
