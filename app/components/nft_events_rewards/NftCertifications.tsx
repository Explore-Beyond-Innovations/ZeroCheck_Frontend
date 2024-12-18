import { NFTCertificationsProps } from "@/@types/nft"
import Image from "next/image"


export default function NFTCertifications({ 
  certifications, 
  title = "NFT Certifications",
  className = "" 
}: NFTCertificationsProps) {
  return (
    <div className={`space-y-6 rounded-lg bg-white p-6 shadow-sm ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col items-center"
          >
            <Image src={cert.image} alt={cert.id} width={180} height={180} />
            <h3 className="mt-4 font-medium text-gray-900">
              {cert.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

