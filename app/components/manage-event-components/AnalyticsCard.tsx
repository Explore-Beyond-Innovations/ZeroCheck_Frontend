import Image from "next/image";

interface Props {
    image: string
    title: string;
    value: string;
    change: number;
}
const AnalyticsCard = ({ title, value, change, image }: Props) => {
    return (
      <div className="bg-[#EDEDED] p-4 w-[19.3rem] rounded-lg flex flex-col items-center gap-4">
       <div className="flex justify-between items-start mb-2 w-full">
        <div className="flex flex-col gap-y-6">
            <p className="font-semibold text-base text-[#202224]">{title}</p>
            <p className="font-bold text-2xl text-[#202224]">{value}</p>
        </div>
        <Image src={image ?? ""} alt={title} width={45} height={43.98} quality={80} />
       </div>

       <div className="flex gap-x-3 w-full">
        <Image src="/icons/uptrend.svg" alt="change" width={20} height={12} quality={80} />

        <p className="text-[#202224] text-base"><span className="text-[#4AD991]">+{change}</span> This Month</p>
       </div>
      </div>
    );
  };
  
  export default AnalyticsCard;
  