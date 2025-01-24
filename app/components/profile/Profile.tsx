import Image from "next/image";
import { poppins } from "@/app/layout";
import SideNavigation from "../sideNavOne";
import ProfileInfo from "./ProfileInfo";
import Achievements from "./Achievements";
import Events from "./Events";

export default function Profile() {
  return (
    <section
      className={`flex bg-[#EDEDED] h-full 2xl:h-screen relative -z-[5] text-black ${poppins.className}`}
    >
      <SideNavigation />
      <div className="flex-1 w-full ml-72">
        <div className="mx-auto max-w-2xl h-screen absolute left-1/2 top-0 -translate-x-1/2 -z-[1]">
          <Image
            src="/images/background.png"
            alt="Background"
            width={600}
            height={600}
            className="w-full"
            priority
          />
        </div>
        <header className="flex space-x-9 justify-end items-center pr-10 py-4">
          <div className="bg-[#4CF565] flex space-x-2 items-center px-2 py-1 rounded-lg h-fit">
            <Image
              src="/icons/profile-check.png"
              alt="profile-check"
              height={20}
              width={20}
            />
            <p className="text-black">World ID Verified</p>
          </div>
          <div className="flex space-x-5 items-center bg-white px-10 py-1 rounded-lg h-fit">
            <Image
              src="/icons/profile-head.png"
              alt="profile-head"
              height={40}
              width={40}
              className="bg-pink-300 rounded-full"
            />
            <div className="text-black">
              <p className="flex items-center space-x-2">
                <span className="font-bold">Jane Doe</span>
                <span className="bg-green-700 w-3 h-3 rounded-full inline-block"></span>
              </p>
              <p className="text-sm">0x1234...2321</p>
            </div>
          </div>
        </header>

        <div className="text-black px-10">
          <h1 className="mb-3 text-2xl font-extrabold">Profile</h1>
          <ProfileInfo />
          <Achievements />
          <Events />
        </div>
      </div>
    </section>
  );
}
