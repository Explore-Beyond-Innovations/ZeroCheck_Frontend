import Image from "next/image";

interface AchievementItemProps {
  image: string;
  title: string;
  description: string;
}

export default function AchievementItem({
  image,
  title,
  description,
}: AchievementItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={image} alt={title} width={40} height={40} className="mb-4" />
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}
