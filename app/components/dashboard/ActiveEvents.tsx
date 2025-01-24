"use client";

import { useState } from "react";
import Card from "./Card";
import CheckInModal from "../Check-In";
import SkewedButton from "./SkewedButton";

type ActiveEvent = {
  title: string;
  description: string;
  end: string;
  location: string;
};

const ActiveEvents = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const ACTIVE_EVENTS = [
    {
      title: "Blockchain Innovation Summit Version 2",
      description:
        "The Blockchain Innovation Summit is a platform for blockchain enthusiasts and experts to meet and discuss the latest trends in the blockchain industry.",
      end: "2023-08-15 10:30pm UTC",
      location: "Washington DC",
      color: {
        background: "F7F7F7", text: "000000"
      }
    },
    {
      title: "Blockchain Innovation Summit Version 2",
      description:
        "The Blockchain Innovation Summit is a platform for blockchain enthusiasts and experts to meet and discuss the latest trends in the blockchain industry.",
      end: "2023-08-15 10:30pm UTC",
      location: "Zoom",
      color: {
        background: "219653", text: "ffffff"
      }
    },
    {
      title: "Blockchain Innovation Summit Version 2",
      description:
        "The Blockchain Innovation Summit is a platform for blockchain enthusiasts and experts to meet and discuss the latest trends in the blockchain industry.",
      end: "2023-08-15 10:30pm UTC",
      location: "Zoom",
      color: {
        background: "219653", text: "ffffff"
      }
    },
    {
      title: "Blockchain Innovation Summit Version 2",
      description:
        "The Blockchain Innovation Summit is a platform for blockchain enthusiasts and experts to meet and discuss the latest trends in the blockchain industry.",
      end: "2023-08-15 10:30pm UTC",
      location: "Zoom",
      color: {
        background: "219653", text: "ffffff"
      }
    },
  ];

  const handleCheckIn = (event: ActiveEvent) => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card>
        <div className="py-4 px-6 w-full">
          <h2 className="font-semibold text-xl mb-4 text-black">
            My Active Events
          </h2>

          <div className="space-y-4">
            {ACTIVE_EVENTS.map((event) => (
              <div
                key={event.title}
                className="py-2 flex justify-between items-start text-sm"
              >
                <div>
                  <h4 className="font-medium text-sm text-black">
                    {event.title}
                  </h4>
                  <p className="font-medium text-[#666666]">
                    Ends: {event.end}
                  </p>
                </div>
                <div className="w-32">
                  <p className="text-black font-medium">{event.location}</p>
                </div>

                {/* <button
                  className="bg-[#EDEDED] p-3 text-black font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => handleCheckIn(event)}
                > */}
                <div className="justify-end">
                  <SkewedButton text="Check In" color={event.color.background} textColor={event.color.text}/>
                </div>
                {/* </button> */}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <CheckInModal
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default ActiveEvents;
