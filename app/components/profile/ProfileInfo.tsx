export default function ProfileInfo() {
  return (
    <div className="flex space-x-5 bg-white p-5 rounded-lg 2xl:space-x-10">
      <div className="w-32 h-32 bg-black rounded-full"></div>
      <div className="space-y-2">
        <p className="text-lg font-bold">John Doe</p>
        <p className="font-bold">@John Doe</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed neque semper laoreet est a
          sapien venenatis
        </p>
        <p>
          <span className="font-bold">Joined:</span>
          <span>20/10/2023</span>
        </p>

        <div className="flex space-x-8 mt-3">
          <p>
            <span>Attended:</span>
            <span className="font-bold">100</span>
          </p>
          <p>
            <span>Hosted:</span>
            <span className="font-bold">100</span>
          </p>
        </div>
      </div>
    </div>
  );
}
