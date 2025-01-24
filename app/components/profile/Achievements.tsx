import AchievementItem from "./AchievementItem";

const achievementList = [
  {
    id: 1,
    image: "/icons/rocket.png",
    title: "Early Adopter",
    description: "Joined ZeroCheck in its first month",
  },
  {
    id: 2,
    image: "/icons/mask.png",
    title: "Event Maestro",
    description: "Joined ZeroCheck in its first month",
  },
  {
    id: 3,
    image: "/icons/mask.png",
    title: "Event Maestro",
    description: "Joined ZeroCheck in its first month",
  },
  {
    id: 4,
    image: "/icons/mask.png",
    title: "Event Maestro",
    description: "Joined ZeroCheck in its first month",
  },
  {
    id: 5,
    image: "/icons/mask.png",
    title: "Event Maestro",
    description: "Joined ZeroCheck in its first month",
  },
];

export default function Achievements() {
  return (
    <div className="bg-white p-5 rounded-lg mt-10">
      <p className="text-lg font-bold">Achievements</p>
      <div className="flex space-x-3 2xl:space-x-10 mt-5">
        {achievementList.map((achievement) => (
          <AchievementItem key={achievement.id} {...achievement} />
        ))}
      </div>
    </div>
  );
}
