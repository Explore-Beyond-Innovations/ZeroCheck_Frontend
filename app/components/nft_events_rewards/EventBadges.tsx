import { EventsProps } from "@/@types/events";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";

export default function Events({
  certifications,
  title = "NFT Certifications",
  className = "",
}: EventsProps) {
  return (
    <div className={`space-y-6 rounded-lg bg-white p-6 shadow-sm ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group bg-gray-100 rounded-lg overflow-hidden p-3 cursor-pointer"
          >
            <div className="relative rounded-lg overflow-hidden p-1">
              <Image
                src={cert.image}
                alt={cert.title}
                width={300}
                height={300}
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-medium text-gray-900">{cert.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{formatDate(cert.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
